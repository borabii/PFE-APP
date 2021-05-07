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
  "/demandeAnnonceur/:userId",
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
        demandeur: req.params.userId,
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
        demandeur: req.params.userId,
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
  "/UpadateImageProfile/:userId",
  upload.single("imageProfile"),
  async (req, res) => {
    const { file } = req;
    try {
      await Abonné.findByIdAndUpdate(req.params.userId, {
        $set: {
          imageProfile: file.filename,
        },
      });
      const newimage = await Abonné.findById(req.params.userId);
      res.json({
        image: newimage.imageProfile,
        msg: "photo de profile mise a jour avec succés",
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error ");
    }
  }
);
//update user description
router.put("/upadateDescription/:userId", async (req, res) => {
  try {
    await Abonné.findByIdAndUpdate(req.params.userId, {
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
router.get("/getAnnonceurData/:userId", async (req, res) => {
  try {
    const annonceur = await Annonceur.findOne({ abonnéId: req.params.userId });
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
router.put("/Annonceur/updatePersonelInfo/:annonceurID", async (req, res) => {
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
  if (adresseAnnonceur) annonceurInfoFields.adresseAnnonceur = adresseAnnonceur;
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
});
//add Horaire annonceur Horaire
router.post("/Annonceur/updateHoraire/:annonceurID", async (req, res) => {
  try {
    Annonceur.findById(req.params.annonceurID).then((annonceur) => {
      const newHoraire = {
        jour: req.body.jour,
        heureDebut: req.body.heureDebut,
        heureFin: req.body.heureFin,
      };

      // Add to comments array
      annonceur.horaireAnnonceur.unshift(newHoraire);

      // Save
      annonceur
        .save()
        .then((annonceur) => res.json(annonceur.horaireAnnonceur));
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
router.post("/Admin/AddAnnonceur/:demandeId", async (req, res) => {
  try {
    const demandeData = await DemandeAnnonceur.findById({
      _id: req.params.demandeId,
    });
    const isAbonnéExsit = await Annonceur.findOne({
      abonnéId: demandeData.demandeur,
    });
    if (isAbonnéExsit) {
      return res
        .status(400)
        .json({ msg: "Abonné déja avoir une compte publicitaire" });
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
router.post("/Admin/RejectDemande/:demandeId", async (req, res) => {});
//add Admin endpoint
router.post("/addAdmin", async (req, res) => {
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
router.get("/Admin/getDemandeAnnonceur", async (req, res) => {
  res;
  try {
    const demandeAnnonceur = await DemandeAnnonceur.find();
    res.json(demandeAnnonceur);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error get contacts");
  }
});
//get demande  for admin
router.get("/Admin/getDemandeur/:demandeurId", auth, async (req, res) => {
  try {
    const demandeur = await Abonné.findById(req.params.demandeurId);
    res.json(demandeur);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error get contacts");
  }
});
router.get("/Admin/abonne", async (req, res) => {
  try {
    const abonne = await Abonné.findById(req.params.userId);
    res.json(abonne);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error ");
  }
});

module.exports = router;
