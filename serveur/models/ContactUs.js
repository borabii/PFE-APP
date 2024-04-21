const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  nom: {
    type: String,
  },
  email: {
    type: String,
  },
  message: {
    type: String,
  },
  DateEnvoie: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Contact", ContactSchema);
