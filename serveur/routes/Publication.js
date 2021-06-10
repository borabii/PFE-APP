const express = require("express");
const Publication = require("../models/Publication");
const Abonné = require("../models/Abonné");
const auth = require("../middleware/auth"); //middleware next()
const router = express.Router();
const multer = require("multer");
const Annonceur = require("../models/Annonceur");
const mongoose = require("mongoose");
const moment = require("../../client/node_modules/moment");
const Notification = require("../models/Notifcation");
//for image uploads
//object that containt where to store uploaded image
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});
//method that controle uploded file type
const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

let upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
});
//used to add String time ("12:00") to date
const concatDateTime = (timeString, date) => {
  let userInput = timeString;
  let hours = userInput.slice(0, 2);
  let minutes = userInput.slice(3);
  newDate = new Date(date);
  newDate.setHours(hours, minutes);
  let dateTimeZone = new Date(newDate).toLocaleString("en-US", {
    timeZone: "Europe/Paris",
  });
  return dateTimeZone;
};

//add pub(type=="Activity")
router.post("/addActivity", auth, async (req, res) => {
  let {
    description,
    categorie,
    adresse,
    nbr_place,
    date_DebutPub,
    heure_debutPub,
    date_FinPub,
    heure_finPub,
  } = req.body;

  try {
    publication = new Publication({
      description,
      categorie,
      adresse,
      nbr_place,
      date_DebutPub,
      heure_debutPub,
      date_FinPub,
      heure_finPub,
      user: req.user.id,
    });
    publication.adresse.coordinates = [
      parseFloat(req.body.adresse.lat),
      parseFloat(req.body.adresse.lng),
    ];

    await publication.save();
    Abonné.findOneAndUpdate({ _id: req.user.id }, { $inc: { userScore: 5 } });
    res.send({ msg: "Activité ajouter avec succes" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
//get all user(activity) posted activity
router.get("/getActOrganized", auth, async (req, res) => {
  try {
    const activity = await Publication.find({ user: req.user.id }).sort({
      date_Pub: -1,
    }); //sort by date -1 -> most recent activity first

    res.json(activity);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error ");
  }
});
//get publication for AbonnéHomePage(near pubs for his current position)
router.get(
  "/homaPagePub/:userLat/:userlon/:userCirclRaidus",
  auth,
  async (req, res) => {
    try {
      var neighborhood = await Publication.find({
        adresse: {
          $near: {
            $geometry: {
              type: "Point",
              coordinates: [req.params.userLat, req.params.userlon],
            },
            $maxDistance: req.params.userCirclRaidus, //distance en metre
            $minDistance: 0,
          },
        },
        date_DebutPub: { $gte: moment.utc().local().format() },
        user: { $ne: req.user.id },
      });
      res.json(neighborhood);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error ");
    }
  }
);
//get all user(pubs) participated (etat:accepter)pubs
router.get("/getActParticipated", auth, async (req, res) => {
  try {
    //$unwind used to specifie on with filed match will run
    const activity = await Publication.aggregate([
      {
        $unwind: "$participants",
      },
      //$match return document that match condition
      {
        $match: {
          "participants._id": mongoose.Types.ObjectId(req.user.id),
          "participants.etat": "accepter",
        },
      },
    ]);
    res.send(activity);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error ");
  }
});
//get all posted pub(type=="Event") for user(annonceur)
router.get("/getAnnonceurEvent/:annonceurId", async (req, res) => {
  try {
    const event = await Publication.find({
      user: req.params.annonceurId,
      typePub: "Event",
    }).sort({
      date_Pub: -1,
    }); //sort by date -1 -> most recent activity first
    res.json(event);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error ");
  }
});
//get all posted pub(type=="Annonce")user(annonceur)
router.get("/getAnnonceurAnnonce/:annonceurId", async (req, res) => {
  try {
    const event = await Publication.find({
      user: req.params.annonceurId,
      typePub: "Annonce",
    }).sort({
      date_Pub: -1,
    }); //sort by date -1 -> most recent activity first
    res.json(event);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error ");
  }
});
//update publication (activity,annonce,event)
router.put("/updatePublication/:pubId", auth, async (req, res) => {
  const {
    description,
    adresse,
    date_DebutPub,
    heure_debutPub,
    date_FinPub,
    heure_finPub,
    nbr_place,
    tarif,
    categorie,
  } = req.body;
  try {
    // Build activity object to store which value are requested from user
    const activityFields = {};
    if (description) activityFields.description = description; // if there's description -> add to activityFields.description
    if (adresse) activityFields.adresse = adresse;
    if (date_DebutPub) activityFields.date_DebutPub = date_DebutPub;
    if (date_FinPub) activityFields.date_FinPub = date_FinPub;
    if (heure_debutPub) activityFields.heure_debutPub = heure_debutPub;
    if (heure_finPub) activityFields.heure_finPub = heure_finPub;
    if (tarif) activityFields.tarif = tarif;
    if (categorie) activityFields.categorie = categorie;
    if (nbr_place) activityFields.nbr_place = nbr_place;

    //find activity where id='/:actid'
    let pub = await Publication.findById(req.params.pubId); //req.params.actid = '/:actid'

    // if not activity = (not found)
    if (!pub) return res.status(404).json({ msg: "Activity not found" });

    pub = await Publication.findByIdAndUpdate(
      req.params.pubId,
      { $set: activityFields },
      { new: true } // if this activity doesn't exist, then CREATE NEW ONE
    );
    //send updated activity to user
    res.json({ pub, msg: "Publication mise a jour avec succés" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error ");
  }
});
//get all participant data in pub
router.get("/getParticipantData/:pubId", auth, async (req, res) => {
  try {
    const participants = await Publication.findById(req.params.pubId).select(
      "participants"
    );
    const ids = participants.participants.filter((item) => item._id);
    const participant = await Abonné.find({
      _id: { $in: ids },
    }).select("firstName lastName  dateOfBirth imageProfile adress ");
    res.send(participant);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
//get all accepted participant data in pub  for home page  pub
router.get(
  "/HomePagePubs/getAcceptedParticipantData/:pubId",
  auth,
  async (req, res) => {
    try {
      const participants = await Publication.findById(req.params.pubId).select(
        "participants "
      );
      const ids = participants.participants.filter(
        (item) => item.etat == "accepter"
      );
      const participant = await Abonné.find({
        _id: { $in: ids },
      }).select("firstName lastName  dateOfBirth imageProfile adress ");
      res.send(participant);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);
//Accepte participant in pub
router.put(
  "/AccepteParticipant/:pubId/:participantId",
  auth,
  async (req, res) => {
    try {
      const a = await Publication.findById(req.params.pubId).then((post) => {
        const b = post.participants.filter(
          (item) => item._id == req.params.participantId
        );
        b[0].etat = "accepter";
        post.nbr_place -= 1;
        post.save();

        res.send({
          post,
          user: b[0]._id,
          pub: req.params.pubId,
          msg: "Participant accpeter avec succes",
        });
      });
      await Abonné.findOneAndUpdate(
        { _id: req.params.participantId },
        { $inc: { userScore: 10 } }
      );
      notif = new Notification({
        sender: req.user.id,
        reciver: req.params.participantId,
        content: "Accepte votre participation",
      });
      notif.save();
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);
//Refuser participant in pub
router.put(
  "/RefuseParticipant/:pubId/:participantId",
  auth,
  async (req, res) => {
    try {
      const a = await Publication.findById(req.params.pubId).then((post) => {
        const b = post.participants.filter(
          (item) => item._id == req.params.participantId
        );
        b[0].etat = "refuser";
        post.save();
        res.send({
          post,
          user: b[0]._id,
          pub: req.params.pubId,
          msg: "Participant refuser avec succes",
        });
      });
      notif = new Notification({
        sender: req.user.id,
        reciver: req.params.participantId,
        content: "Refuse votre participation",
      });
      notif.save();
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);
//participate to  Publication
router.put("/partcipatePub/:pubId", auth, async (req, res) => {
  try {
    Publication.findById(req.params.pubId).then((post) => {
      if (post.participants.length > 0) {
        if (
          post.participants.filter((item) => item.toString() === req.user.id)
        ) {
          return res.json({ msg: "user déja participer a cette publication" });
        }
      }

      // Add user id to participants array
      post.participants.unshift(req.user.id);
      post
        .save()
        .then((post) =>
          res.json({ post, msg: "Vous avez participer avec succes " })
        );
      notif = new Notification({
        sender: req.user.id,
        reciver: post.user,
        content: "A participer a votre publication",
      });
      notif.save();
    });
  } catch (err) {}
});
// add  event
router.post("/addEvent/:annonceurId", auth, async (req, res) => {
  const {
    description,
    categorie,
    adresse,
    nbr_place,
    tarif,
    date_DebutPub,
    heure_debutPub,
    date_FinPub,
    heure_finPub,
  } = req.body;
  try {
    publication = new Publication({
      description,
      categorie,
      adresse,
      tarif,
      nbr_place,
      date_DebutPub: concatDateTime(heure_debutPub, date_DebutPub),
      heure_debutPub,
      date_FinPub: concatDateTime(heure_finPub, date_FinPub),
      heure_finPub,
      user: req.params.annonceurId,
      typePub: "Event",
    });
    publication.adresse.coordinates = [
      parseFloat(req.body.adresse.lat),
      parseFloat(req.body.adresse.lng),
    ];
    const event = await publication.save();
    res.send({ event, msg: "Evenement  ajouter avec succes" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
// add  annonce
router.post(
  "/addAnnonce/:annonceurId",
  auth,
  upload.single("imageAnnonce"),
  async (req, res) => {
    const { description, categorie, date_DebutPub, date_FinPub } = req.body;

    try {
      const annonceurAdr = await Annonceur.findById(
        req.params.annonceurId
      ).select("adresseAnnonceur -_id");
      publication = new Publication({
        description,
        categorie,
        adresse: annonceurAdr.adresseAnnonceur,
        image_url: req.file.filename,
        date_DebutPub,
        date_FinPub,
        user: req.params.annonceurId,
        typePub: "Annonce",
      });
      const annonce = await publication.save();
      res.send({ annonce, msg: "Annonce  ajouter avec succes" });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);
//get 10 last annonce for landing page
router.get("/landingPage/news/Annonce", async (req, res) => {
  try {
    const annonce = await Publication.find({ typePub: "Annonce" })
      .select(
        "adresse description categorie image_url date_DebutPub date_FinPub"
      )
      .sort({ date_Pub: -1 })
      .limit(10);
    res.send(annonce);
  } catch (err) {
    console.log(err);
  }
});
//get 10 last activty for landing page
router.get("/landingPage/news/Activity", async (req, res) => {
  try {
    const activity = await Publication.find({ typePub: "Activity" })
      .sort({ date_Pub: -1 })
      .limit(10);
    res.json(activity);
  } catch (err) {
    console.log(err);
  }
});
//get 10 last event for landing page
router.get("/landingPage/news/Event", async (req, res) => {
  try {
    const event = await Publication.find({ typePub: "Event" })
      .select(
        "adresse description categorie image_url date_DebutPub date_FinPub"
      )
      .sort({ date_Pub: -1 })
      .limit(10);
    res.send(event);
  } catch (err) {
    console.log(err);
  }
});
//get top 3 user of today for landing page
router.get("/landingPage/news/topUser", async (req, res) => {
  try {
    const event = await Abonné.find()
      .select("adresse description firstName lastName imageProfile userScore")
      .sort({ userScore: "desc" })
      .limit(3);
    res.send(event);
  } catch (err) {
    console.log(err);
  }
});
////get 10 last user posted activity
router.get("/Profile/getActOrg/:id", auth, async (req, res) => {
  try {
    const activity = await Publication.find({
      user: req.params.id,
      date_DebutPub: { $gte: new Date() },
    })
      .sort({
        date_Pub: -1,
      })
      .limit(10); //sort by date -1 -> most recent activity first

    res.json(activity);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error ");
  }
});
/**************************************************************** */
//delete publication(activity,event,annonce)
router.delete("/deletepub/:pubId", async (req, res) => {
  try {
    const pubId = req.params.pubId;
    const typePub = await Publication.findByIdAndRemove(pubId).select(
      "typePub "
    );
    res.json({ typePub, msg: "Publication supprimer avec succés !" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
router.get("/Admin/getActivities", async (req, res) => {
  try {
    const activity = await Publication.find({ typePub: "Activity" });

    res.json(activity);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error ");
  }
});
//get all publication(annonces) for admin
router.get("/Admin/getAnnonces", async (req, res) => {
  try {
    const annonces = await Publication.find({ typePub: "Annonce" });
    res.json(annonces);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error get contacts");
  }
});
//get all publication(event) for admin
router.get("/Admin/getEvents", async (req, res) => {
  try {
    const events = await Publication.find({ typePub: "Event" });
    res.json(events);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error get contacts");
  }
});
// get activity number  posted by id of user  for admin
router.get("/Admin/getNumberAct/:userId", async (req, res) => {
  try {
    const count = { nbrActdeabonne: null, totalRate: null };
    await Publication.countDocuments({
      typePub: "Activity",
      user: req.params.userId,
    }).then((docCount) => {
      count.nbrActdeabonne = docCount;
    });
    const profileInfo = await Abonné.findById(req.params.userId);
    const totalRate =
      profileInfo.userAvis.reduce((accum, item) => accum + item.avis, 0) /
      profileInfo.userAvis.length;
    res.json({ nbrAct: count.nbrActdeabonne, totalRate: totalRate });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
// get annonce and event number  posted by id of user  for admin
router.get("/Admin/getAnnonceEventNumber/:userId", async (req, res) => {
  try {
    const count = { nbrAnnoncedeannonceur: null, nbrEventdeannonceur: null };
    await Publication.countDocuments({
      typePub: "Annonce",
      user: req.params.userId,
    }).then((docCount) => {
      count.nbrAnnoncedeannonceur = docCount;
    });
    await Publication.countDocuments({
      typePub: "Event",
      user: req.params.userId,
    }).then((docCount) => {
      count.nbrEventdeannonceur = docCount;
    });
    res.json(count);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error get contacts");
  }
});

module.exports = router;
