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
    status: {
      type: Boolean,
      default: true,
    },
    userScore: {
      type: Number,
      default: 0,
    },
    userAvis: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        avis: {
          type: Number,
        },
        rateDate: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    centreInteret: [
      {
        type: String,
      },
    ],
    distanceDeRecherche: {
      type: Number,
      default: 10000,
    },
    following: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  })
);
module.exports = mongoose.model("Abonné");
