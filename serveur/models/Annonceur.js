const mongoose = require("mongoose");

const AnnonceurSchema = new mongoose.Schema({
  nomAnnonceur: {
    type: String,
  },
  adresseAnnonceur: {
    type: {
      type: String,
      enum: ["Point"],
      default: "Point",
    },
    coordinates: {
      type: [Number],
      default: [0, 0],
    },
  },
  numTelAnnonceur: {
    type: Number,
  },
  emailProAnnonceur: {
    type: String,
  },
  status: {
    type: Boolean,
    default: true,
  },
  userAvis: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Abonné",
      },
      avis: {
        type: Number,
        default: 0,
      },
      rateDate: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  catégorieAnnonceur: {
    type: String,
  },
  descriptionAnnonceur: {
    type: String,
  },
  imageCouverture: {
    type: String,
  },

  abonnéId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Abonné",
  },
  aceptationDate: {
    type: Date,
    default: Date.now,
  },
  followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "Abonné" }],
});
AnnonceurSchema.index({ adresseAnnonceur: "2dsphere" });

module.exports = mongoose.model("Annonceur", AnnonceurSchema);
