const express = require("express");
const auth = require("../middleware/auth"); //middleware next()
const router = express.Router();

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("config");
const gravatar = require("gravatar");
const multer = require("multer");
//models
const Abonné = require("../models/Abonné");
const Admin = require("../models/Admin");
const Annonceur = require("../models/Annonceur");
const DemandeAnnonceur = require("../models/DemandeAnnonceur");
const Publication = require("../models/Publication");

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
      return res.status(400).json({ msg: "Email déja existant" });
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
        expiresIn: 3600,
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
      numTelAnnonceur,
      emailProAnnonceur,
      catégorieAnnonceur,
    } = req.body;
    const { file } = req;
    try {
      demandeAnnonceur = new DemandeAnnonceur({
        nomAnnonceur,
        numTelAnnonceur,
        emailProAnnonceur,
        catégorieAnnonceur,
        justificatifAnnonceur: file.filename,
        demandeur: req.user.id,
      });
      demandeAnnonceur.adresseAnnonceur.coordinates = [
        req.body.adrlat,
        req.body.adrlng,
      ];

      await demandeAnnonceur.save();
      res.send("Votre Demande est ajouter avec succés ");
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);
//check if abonné already send a  demande  Annonceur or not
router.get("/EtatDemandeEscpaceAnnonceur", auth, async (req, res) => {
  try {
    let demande = await DemandeAnnonceur.findOne({
      demandeur: req.user.id,
    });

    // if id abonné  is already have a demande
    if (demande) {
      return res.json({ isSent: true });
    } else {
      return res.json({ isSent: false });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
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
//update abonné distance de recherche
router.put("/UpdateDistanceRecherche", auth, async (req, res) => {
  try {
    await Abonné.findByIdAndUpdate(req.user.id, {
      $set: {
        distanceDeRecherche: req.body.distance * 1000,
      },
    });
    res.json({
      msg: "Distance de recherhce mise a jour avec succés",
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

    res.json({ annonceurs, msg: "Annonceur supprimer !" });
  }
);
//get data for dashboard
router.get("/Admin/dashboard", async (req, res) => {
  try {
    let count = { nbrAbonné: null, nbrAdmin: null, nbrAnnonceur: null };
    await Abonné.countDocuments().then((docCount) => {
      count.nbrAbonné = docCount;
    });
    await Annonceur.countDocuments().then((docCount) => {
      count.nbrAnnonceur = docCount;
    });
    await Admin.countDocuments().then((docCount) => {
      count.nbrAdmin = docCount;
    });
    await Publication.countDocuments({ typePub: "Event" }).then((docCount) => {
      count.nbrEvent = docCount;
    });
    await Publication.countDocuments({ typePub: "Annonce" }).then(
      (docCount) => {
        count.nbrAnnonce = docCount;
      }
    );
    await Publication.countDocuments({ typePub: "Activity" }).then(
      (docCount) => {
        count.nbrActivity = docCount;
      }
    );
    res.json(count);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error ");
  }
});
//get Annonceur data
router.get("/Admin/getAnnonceur/:annonceurId", auth, async (req, res) => {
  try {
    const annonceur = await Annonceur.findById(req.params.annonceurId);
    res.json(annonceur);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
//
/***********Gestion admin*********/
//add admin route
router.post("/Admin/addAdmin", auth, async (req, res) => {
  const {
    firstName,
    lastName,
    dateOfBirth,
    gendre,
    email,
    password,
    permission,
  } = req.body;
  try {
    let admin = await Admin.findOne({ email: email });

    // if abonné (email) is already existed
    if (admin) {
      return res.status(400).json({ msg: "Admin already exists" });
    }
    user = new Admin({
      firstName,
      lastName,
      dateOfBirth,
      gendre,
      email,
      password,
      permission,
    });
    // encrypt password before store do database
    const salt = await bcrypt.genSalt(10);
    //add crypted password to user object before store it to db
    user.password = await bcrypt.hash(password, salt);
    user.role = "Admin";
    await user.save();

    res.json({ user });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
//delete  admin
router.delete("/deleteAdmin/:adminId", auth, async (req, res) => {
  try {
    await Admin.findByIdAndRemove(req.params.adminId);
    const admins = await Admin.find();

    res.json({ admins, msg: "Admin suprrimer !" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error ");
  }
});
//edit admin permission/password
router.put("/Admin/editAdmin/:adminId", auth, async (req, res) => {
  let { permission, password } = req.body;

  const adminFields = {};
  if (permission) adminFields.permission = permission;
  if (password) adminFields.password = password;
  try {
    // encrypt password before store do database

    if (password) {
      const salt = await bcrypt.genSalt(10);
      //add crypted password to user object before store it to db
      adminFields.password = await bcrypt.hash(adminFields.password, salt);
    }
    await Admin.findByIdAndUpdate(
      req.params.adminId,
      { $set: adminFields },
      { new: true }
    );
    res.send({ msg: "mise a jour avec succés" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error ");
  }
});
//get list admin
router.get("/Admin/getadmin", auth, async (req, res) => {
  try {
    const admin = await Admin.find();
    res.json(admin);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error get contacts");
  }
});

module.exports = router;
