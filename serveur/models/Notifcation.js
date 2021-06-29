const mongoose = require("mongoose");

const NotificationSchema = new mongoose.Schema({
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Abonné",
    required: true,
  },
  reciver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Abonné",
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  typeNotif: {
    type: String,
    enum: ["userNotification", "adminNotification"],
    default: "userNotification",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Notification", NotificationSchema);
