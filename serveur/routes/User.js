const express = require("express");
const auth = require("../middleware/auth"); //middleware next()

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("config");
const gravatar = require("gravatar");
const multer = require("multer");
const Abonné = require("../models/Abonné");
const Admin = require("../models/Admin");
const Annonceur = require("../models/Annonceur");
const DemandeAnnonceur = require("../models/DemandeAnnonceur");
const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

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

/*************************************************************************** */
/*****************************Abonné route********************************* */
/************************************************************************* */
//signUp(user/abonné) endpoint
router.post("/signup", async (req, res) => {
  const {
    firstName,
    lastName,
    dateOfBirth,
    gendre,
    email,
    password,
    imageProfile,
    adress,
  } = req.body;
  try {
    let abonné = await Abonné.findOne({ email: email });

    // if abonné (email) is already existed
    if (abonné) {
      return res.status(400).json({ msg: "User already exists" });
    }

    abonné = new Abonné({
      firstName,
      lastName,
      dateOfBirth,
      gendre,
      email,
      password,
      imageProfile,
      adress,
    });
    //generate avatar
    const avatar = gravatar.url(req.body.email, {
      s: "200", // Size
      r: "pg", // Rating
      d: "mm", // Default
    });
    // encrypt password before store do database
    const salt = await bcrypt.genSalt(10);
    //add crypted password to user object before store it to db
    abonné.password = await bcrypt.hash(password, salt);
    abonné.imageProfile = avatar;
    abonné.adress = null;
    abonné.description = null;
    await abonné.save();

    const payload = {
      user: {
        id: abonné.id,
      },
    };

    // jwtSecret is declared on default.json ("secret")
    jwt.sign(
      payload,
      config.get("jwtSecret"),
      {
        expiresIn: 360000, //3600 sec = 1 hour
      },
      (err, token) => {
        if (err) throw err;
        const user = abonné;
        res.json({
          token,
          role: abonné.role,
          user,
        });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
//send demande Annonceur
router.post(
  "/demandeAnnonceur",
  auth,
  upload.single("justificatifAnnonceur"),
  async (req, res) => {
    const {
      nomAnnonceur,
      adresseAnnonceur,
      numTelAnnonceur,
      emailProAnnonceur,
      catégorieAnnonceur,
    } = req.body;
    const { file } = req;

    const photo = file;
    console.log(photo);
    try {
      let demande = await DemandeAnnonceur.findOne({
        demandeur: req.user.id,
      });

      // if id abonné  is already have a demande
      if (demande) {
        return res.json("Demande déja envoyer");
      }

      demandeAnnonceur = new DemandeAnnonceur({
        nomAnnonceur,
        adresseAnnonceur,
        numTelAnnonceur,
        emailProAnnonceur,
        catégorieAnnonceur,
        justificatifAnnonceur: file.filename,
        demandeur: req.user.id,
      });

      await demandeAnnonceur.save();
      res.send("Votre Demande est ajouter avec succés ");
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);
//update user profile picture
router.put(
  "/UpadateImageProfile",
  auth,
  upload.single("imageProfile"),
  async (req, res) => {
    const { file } = req;
    try {
      await Abonné.findByIdAndUpdate(req.user.id, {
        $set: {
          imageProfile: file.filename,
        },
      });
      res.json({
        msg: "photo de profile mise a jour avec succés",
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error ");
    }
  }
);
//update user description
router.put("/upadateDescription", auth, async (req, res) => {
  try {
    await Abonné.findByIdAndUpdate(req.user.id, {
      $set: {
        description: req.body.updayteddescription,
      },
    });
    res.json({
      msg: "decription mise a jour avec succés",
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error ");
  }
});
/************************************************************************** */
/*****************************Anonnceur route*******************************/
/************************************************************************ */

//load annonceur data
router.get("/getAnnonceurData", auth, async (req, res) => {
  try {
    const annonceur = await Annonceur.findOne({ abonnéId: req.user.id });
    res.send(annonceur);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error ");
  }
});
//update annonceur photo de couverture
router.put(
  "/Annonceur/updateProfileImage/:annonceurId",
  upload.single("imageProfile"),
  async (req, res) => {
    const { file } = req;
    try {
      await Annonceur.findByIdAndUpdate(req.params.annonceurId, {
        $set: {
          imageCouverture: file.filename,
        },
      });
      const newimage = await Annonceur.findById(req.params.annonceurId);
      res.json({
        image: newimage.imageCouverture,
        msg: "photo de profile mise a jour avec succés",
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error ");
    }
  }
);
//update annonceur personel info
router.put(
  "/Annonceur/updatePersonelInfo/:annonceurID",
  auth,
  async (req, res) => {
    const {
      nomAnnonceur,
      numTelAnnonceur,
      descriptionAnnonceur,
      emailProAnnonceur,
      adresseAnnonceur,
    } = req.body;
    const annonceurInfoFields = {};
    if (nomAnnonceur) annonceurInfoFields.nomAnnonceur = nomAnnonceur; // if there's name -> add to contactFields.name
    if (numTelAnnonceur) annonceurInfoFields.numTelAnnonceur = numTelAnnonceur;
    if (descriptionAnnonceur)
      annonceurInfoFields.descriptionAnnonceur = descriptionAnnonceur;
    if (emailProAnnonceur)
      annonceurInfoFields.emailProAnnonceur = emailProAnnonceur;
    if (adresseAnnonceur)
      annonceurInfoFields.adresseAnnonceur = adresseAnnonceur;
    try {
      const annonceur = await Annonceur.findByIdAndUpdate(
        req.params.annonceurID,
        { $set: annonceurInfoFields },
        { new: true }
      );
      res.json({
        annonceur: annonceur,
        msg: "Information  mise a jour avec succés",
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error ");
    }
  }
);
//add new Horaire annonceur Horaire
router.post("/Annonceur/AddHoraire/:annonceurID", auth, async (req, res) => {
  try {
    Annonceur.findById(req.params.annonceurID).then((annonceur) => {
      const newHoraire = {
        jour: req.body.jour,
        heureDebut: req.body.heureDebut,
        heureFin: req.body.heureFin,
      };

      // Add to horaire to  horaireAnnonceur array
      annonceur.horaireAnnonceur.unshift(newHoraire);

      // Save
      annonceur.save().then((annonceur) =>
        res.json({
          msg: "horaire ajouter avec succes",
          annonceur: annonceur.horaireAnnonceur,
        })
      );
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error ");
  }
});
//Update horaire
router.post("/Annonceur/updateHoraire/:annonceurID", auth, async (req, res) => {
  try {
    Annonceur.findById(req.params.annonceurID).then((annonceur) => {
      const newHoraire = req.body;
      // Add to comments array
      annonceur.horaireAnnonceur = newHoraire;

      // Save
      annonceur.save().then((annonceur) =>
        res.json({
          msg: "horaire mise a jour avec succes",
          annonceur: annonceur.horaireAnnonceur,
        })
      );
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error ");
  }
});

/*********************************************************************** */
/*****************************Admin route****************************** */
/********************************************************************* */
//add annonceur route(demmande accepter)
router.post("/Admin/AddAnnonceur/:demandeId", auth, async (req, res) => {
  try {
    const demandeData = await DemandeAnnonceur.findById({
      _id: req.params.demandeId,
    });
    const isAbonnéExsit = await Annonceur.findOne({
      abonnéId: demandeData.demandeur,
    });
    if (isAbonnéExsit) {
      return res.json({ msg: "Abonné déja avoir une compte publicitaire" });
    }
    await Abonné.findByIdAndUpdate(demandeData.demandeur, {
      $set: {
        isAnnonceur: true,
      },
    });
    annonceur = new Annonceur({
      nomAnnonceur: demandeData.nomAnnonceur,
      adresseAnnonceur: demandeData.adresseAnnonceur,
      numTelAnnonceur: demandeData.numTelAnnonceur,
      emailProAnnonceur: demandeData.emailProAnnonceur,
      catégorieAnnonceur: demandeData.catégorieAnnonceur,
      descriptionAnnonceur: null,
      imageCouverture: null,
      abonnéId: demandeData.demandeur,
    });
    annonceur.save();
    await DemandeAnnonceur.findByIdAndUpdate(req.params.demandeId, {
      $set: {
        etatDemande: "Accepter",
      },
    });
    res.send({ msg: "Annonceur ajouter avec succés" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error ");
  }
});
//add annonceur route(demmande refuser)
router.post("/Admin/RejectDemande/:demandeId", auth, async (req, res) => {
  try {
    await DemandeAnnonceur.findByIdAndUpdate(req.params.demandeId, {
      $set: {
        etatDemande: "Refuser",
      },
    });
    res.send({ msg: "demande refuser avec succés" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error ");
  }
});
//get propritare demande
router.get("/Admin/getDemandeur/:demandeurId", auth, async (req, res) => {
  try {
    const demandeurInfo = await Abonné.findById(req.params.demandeurId);
    res.json(demandeurInfo);
  } catch (err) {
    console.error(err.message);
    // res.status(500).send("Server Error ");
  }
});
//add Admin endpoint
router.post("/addAdmin", auth, async (req, res) => {
  const {
    firstName,
    lastName,
    dateOfBirth,
    gendre,
    email,
    password,
    imageProfile,
    nom,
    adressAnnonceur,
  } = req.body;
  try {
    let admin = await Annonceur.findOne({ email: email });

    // if abonné (email) is already existed
    if (admin) {
      return res.status(400).json({ msg: "User already exists" });
    }

    abonné = new Admin({
      firstName,
      lastName,
      dateOfBirth,
      gendre,
      email,
      password,
      imageProfile,
      adress,
      nom,
      adressAnnonceur,
    });
    // encrypt password before store do database
    const salt = await bcrypt.genSalt(10);
    //add crypted password to user object before store it to db
    abonné.password = await bcrypt.hash(password, salt);

    await admin.save();

    const payload = {
      user: {
        id: abonné.id,
      },
    };

    // jwtSecret is declared on default.json ("secret")
    jwt.sign(
      payload,
      config.get("jwtSecret"),
      {
        expiresIn: 360000, //3600 sec = 1 hour
      },
      (err, token) => {
        if (err) throw err;

        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
//get demandeannonceur for admin
router.get("/Admin/getDemandeAnnonceur", auth, async (req, res) => {
  try {
    const demandeAnnonceur = await DemandeAnnonceur.find();
    res.json(demandeAnnonceur);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error get contacts");
  }
});
//get demande propritaire(abonné)  for admin
router.get("/Admin/getDemandeur/:demandeurId", auth, async (req, res) => {
  try {
    const demandeur = await Abonné.findById(req.params.demandeurId);
    res.json(demandeur);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error get contacts");
  }
});
//get list abonnes for admin
router.get("/Admin/getAbonnes", auth, async (req, res) => {
  try {
    const abonnes = await Abonné.find();
    res.json(abonnes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error ");
  }
});
//delete abonne for admin
router.delete("/Admin/deleteAbonne/:abonneId", auth, async (req, res) => {
  const abonneId = req.params.abonneId;
  await Abonné.findByIdAndRemove(abonneId);
  const abonnes = await Abonné.find();
  res.json({ abonnes, msg: "Abonné supprimer avec succés " });
});
//get list annonceurs for admin
router.get("/Admin/getAnnonceur", auth, async (req, res) => {
  try {
    const annonceur = await Annonceur.find();
    res.json(annonceur);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error ");
  }
});
//delete annonceur for admin
router.delete(
  "/Admin/deleteAnnonceure/:annonceurId",
  auth,
  async (req, res) => {
    const id = await Annonceur.findById(req.params.annonceurId).select(
      " abonnéId"
    );
    await Abonné.findByIdAndUpdate(id.abonnéId, {
      $set: {
        isAnnonceur: false,
      },
    });
    await Annonceur.findByIdAndRemove(req.params.annonceurId);
    const annonceurs = await Annonceur.find();

    res.json({ annonceurs, msg: "Annonceur removed !" });
  }
);

module.exports = router;
