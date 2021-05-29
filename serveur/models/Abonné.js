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
    distanceDeRecherche: {
      type: Number,
      default: 10000,
    },
  })
);
module.exports = mongoose.model("Abonné");
