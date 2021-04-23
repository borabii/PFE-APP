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
    image_url,
    discription,
    adresse,
    nbr_place,
    date_DebutPUb,
    date_FinPUb,
  } = req.body;
  try {
    //get user id from request parametre
    // const id = req.params.id;
    const token = JSON.stringify(req.headers);
    token.replace(" ", "");
    var decoded = jwt_decode(token);

    // req.user = decoded.user;
    publication = new Publication({
      image_url,
      discription,
      adresse,
      nbr_place,
      date_DebutPUb,
      date_FinPUb,
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
