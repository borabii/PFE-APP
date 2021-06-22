const express = require("express");
const auth = require("../middleware/auth");
const router = express.Router();
const Reclamation = require("../models/Reclamation");
const Abonné = require("../models/Abonné");

/***************************************/
// add reclamation
router.post("/reportUser/:userId", auth, async (req, res) => {
  let { cause } = req.body;
  try {
    reclamation = new Reclamation({
      reportedUser: req.params.userId,
      user: req.user.id,
      cause,
    });
    await reclamation.save();
    res.json({ msg: "votre réclamation est envoyer avec succés" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//get réclamation for admin
router.get("/Admin/getReports", auth, async (req, res) => {
  try {
    const reclamation = await Reclamation.aggregate([
      {
        $group: {
          _id: "$reportedUser",
          count: { $sum: 1 },
        },
      },
      {
        $lookup: {
          from: Abonné.collection.name,
          localField: "_id",
          foreignField: "_id",
          as: "accounts",
        },
      },
    ]).sort({ reportDate: -1 });
    res.json(reclamation);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error ");
  }
});
//get user liste of report
router.get("/Admin/getUserReport/:userId", auth, async (req, res) => {
  try {
    const notif = await Reclamation.find({
      reportedUser: req.params.userId,
    })
      .select("-reportedUser")
      .populate("user", "firstName lastName   imageProfile");
    res.json(notif);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error ");
  }
});

module.exports = router;
