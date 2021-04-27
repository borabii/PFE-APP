const express = require("express");
const Publication = require("../models/Publication");
const auth = require("../middleware/auth"); //middleware next()
const router = express.Router();
const jwt = require("jsonwebtoken");
const config = require("config");
const jwt_decode = require("jwt-decode");
//add pub(type=="Activity")
router.post("/addActivity", auth, async (req, res) => {
  const {
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
    //get user id from request parametre
    // const id = req.params.id;
    const token = JSON.stringify(req.headers.token);
    token.replace(" ", "");
    var decoded = jwt_decode(token);

    // req.user = decoded.user;
    publication = new Publication({
      description,
      categorie,
      adresse,
      nbr_place,
      date_DebutPub,
      heure_debutPub,
      date_FinPub,
      heure_finPub,
      user: decoded.user.id,
    });
    const act = await publication.save();
    res.send(act);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
//get all user(activity) posted activity
router.get("/getAct", auth, async (req, res) => {
  try {
    //get token from req headers
    let token = JSON.stringify(req.headers.token);
    //remove first space caractere from token value
    token.replace(" ", "");
    //decode token value
    var decoded = jwt_decode(token);

    const activity = await Publication.find({ user: decoded.user.id }).sort({
      date: -1,
    }); //sort by date -1 -> most recent activity first
    res.json(activity);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error ");
  }
});
//delete publication(activity,event,annonce)
router.delete("/deletepub/:pubId", auth, async (req, res) => {
  const pubId = req.params.pubId;
  await Publication.findByIdAndRemove({ typePub: "Activity", _id: pubId });
  res.json({ msg: "Publication removed !" });
});
//update publication (activity)
router.put("/updateActivity/:actid", auth, async (req, res) => {
  //auth = access users and token
  // res.send('Update activity !');
  const {
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
    // Build activity object to store which value are requested from user
    const activityFields = {};
    if (description) activityFields.description = description; // if there's description -> add to activityFields.description
    if (categorie) activityFields.categorie = categorie;
    if (adresse) activityFields.adresse = adresse;
    if (date_DebutPub) activityFields.date_DebutPub = date_DebutPub;
    if (heure_debutPub) activityFields.heure_debutPub = heure_debutPub;
    if (date_FinPub) activityFields.date_FinPub = date_FinPub;
    if (nbr_place) activityFields.nbr_place = nbr_place;
    if (heure_finPub) activityFields.heure_finPub = heure_finPub;
    //find activity where id='/:actid'
    let activity = await Publication.findById(req.params.actid); //req.params.actid = '/:actid'

    // if not activity = (not found)
    if (!activity) return res.status(404).json({ msg: "Activity not found" });

    activity = await Publication.findByIdAndUpdate(
      req.params.actid,
      { $set: activityFields },
      { new: true } // if this activity doesn't exist, then CREATE NEW ONE
    );
    //send updated activity to user
    res.json(activity);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error ");
  }
});

/**************************************************************** */
router.get("/Admin/getActivity", auth, async (req, res) => {
  try {
    const activity = await Publication.find({ typePub: "Activity" });

    res.json({ activity, nn });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error ");
  }
});
module.exports = router;
