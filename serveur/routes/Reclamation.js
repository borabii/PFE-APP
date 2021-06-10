const express = require("express");
const auth = require("../middleware/auth");
const router = express.Router();
const Reclamation = require("../models/Reclamation");
const Abonné = require("../models/Abonné");
/***************************************/
// add reclamation
router.post("/addReclamation/:IdSignialeur", auth, async (req, res) => {
  let { cause } = req.body;
  try {
    reclamation = new Reclamation({
      IdSignialeur: req.params.IdSignialeur,
      IdReclameur: req.user.id,
      cause,
    });
    await reclamation.save();
    res.json({ msg: " votre réclamation est envoyer avec succés" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
/***************************************/
//get propritare Reclamation
router.get("/Admin/getReclameur/:ReclameurId", auth, async (req, res) => {
  try {
    const reclameur = await Abonné.findById(req.params.IdSignialeur);
    res.json(reclameur);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error ");
  }
});
//get demandeReclameur for admin
router.get("/Admin/getReclamtion", auth, async (req, res) => {
  try {
    const reclamation = await Reclamation.find();
    res.json(reclamation);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error get contacts");
  }
});

module.exports = router;
