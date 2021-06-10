const express = require("express");
const router = express.Router();
const Notification = require("../models/Notifcation");
const auth = require("../middleware/auth"); //middleware next()

//get notification for user(aboonné)
router.get("/getNotification", auth, async (req, res) => {
  try {
    const notif = await Notification.find({ reciver: req.user.id })
      .populate("sender", "firstName lastName   imageProfile")
      .sort({ createdAt: -1 });
    await Notification.remove({ reciver: req.user.id });

    res.send(notif);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
