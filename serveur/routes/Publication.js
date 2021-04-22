const express = require("express");
const Publication = require("../models/Publication");
const auth = require("../middleware/auth"); //middleware next()
const router = express.Router();

//add pub(type=="Activity")
router.post("/addActivity/:id", auth, async (req, res) => {
  const {
    image_url,
    discription,
    adresse,
    nbr_place,
    date_DebutPUb,
    date_FinPUb,
  } = req.body;
  try {
    //get user id from request parametre
    const id = req.params.id;
    publication = new Publication({
      image_url,
      discription,
      adresse,
      nbr_place,
      date_DebutPUb,
      date_FinPUb,
      user: id,
    });
    await publication.save();
    res.send("Activité ajouter avec succes");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
//get all user(activity) posted activity
router.get("/:id", auth, async (req, res) => {
  try {
    //get user id from request parametre
    const id = req.params.id;
    const activity = await Publication.find({ user: id }).sort({ date: -1 }); //sort by date -1 -> most recent activity first
    res.json(activity);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error get contacts");
  }
});
//delete publication(activity,event,annonce)
router.delete("/deletepub/:pubId", auth, async (req, res) => {
  const pubId = req.params.pubId;
  await Publication.findByIdAndRemove(pubId);
  res.json({ msg: "Publication removed !" });
});
module.exports = router;
