const mongoose = require("mongoose");

const NotificationSchema = new mongoose.Schema({
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Abonné",
  },
  reciver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Abonné",
  },
  content: {
    type: String,
  },
  typeNotif: {
    type: String,
    enum: ["userNotification", "adminNotification"],
    default: "userNotification",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Notification", NotificationSchema);
