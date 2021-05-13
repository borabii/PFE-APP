const express = require("express");
const auth = require("../middleware/auth");
const router = express.Router();

const multer = require("multer");
const Catégorie = require("../models/Catégorie");
const Abonné = require("../models/Abonné");

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
//**********CATEGORIE*************/
//get catégorie for user(Abonné/Annonceur)
router.get("/getListcategories", async (req, res) => {
  try {
    const categorie = await Catégorie.find();
    let options = categorie.map((city) => {
      return { value: city._id, label: city.typeCatégorie };
    });
    res.json({ catégorieOption: options, fullCatégorieData: categorie });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error ");
  }
});
//get list categorie for admin
router.get("/Admin/categorie", async (req, res) => {
  try {
    const categorie = await Catégorie.find();
    res.json(categorie);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
//delete catégorie
router.delete("/Admin/deleteCategorie/:categorieId", async (req, res) => {
  try {
    await Catégorie.findByIdAndRemove(req.params.categorieId);
    const catégories = await Catégorie.find();
    res.json({ catégories, msg: "Catégorie supprimer !" });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error ");
  }
});

//add Categorie
router.post(
  "/Admin/addCategorie",
  upload.single("imageCatégorie"),
  async (req, res) => {
    const { typeCatégorie } = req.body;
    const { file } = req;

    try {
      const categorie = await Catégorie.findOne({
        typeCatégorie: typeCatégorie,
      });
      // if categorie (type_categorie) is already existed
      if (categorie) {
        return res.status(400).json({ msg: "categorie  déja existant" });
      }
      NewCategorie = new Catégorie({
        typeCatégorie,
        imageCatégorie: file.filename,
      });
      await NewCategorie.save();
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);
//delete catégorie for abonné
router.put("/deleteCategorie/:categorieType", auth, async (req, res) => {
  console.log(req.params.categorieType);
  try {
    let result = await Abonné.findByIdAndUpdate(
      req.user.id,
      { $pull: { centreInteret: req.params.categorieType } },
      { new: true }
    );
    res.json({ msg: " centre d'intérêt supprimer avec succès" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
//add Centre of interset for use(Abonné)
router.put("/addCategorie", auth, async (req, res) => {
  try {
    console.log(req.body);
    let result = await Abonné.findByIdAndUpdate(
      req.user.id,
      { $push: { centreInteret: req.body } },
      { new: true }
    );
    res.json({ msg: " centre d'intérêt ajouter avec succès" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
