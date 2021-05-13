const mongoose = require("mongoose");
const User = require("./User");

const AbonnéSchema = User.discriminator(
  "Abonné",
  new mongoose.Schema({
    imageProfile: {
      type: String,
    },
    adress: {
      type: String,
    },
    description: {
      type: String,
    },
    isAnnonceur: {
      type: Boolean,
      default: false,
    },
    centreInteret: [
      {
        type: String,
      },
    ],
  })
);
module.exports = mongoose.model("Abonné");
