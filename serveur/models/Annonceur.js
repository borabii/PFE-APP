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
});
AnnonceurSchema.index({ adresseAnnonceur: "2dsphere" });

module.exports = mongoose.model("Annonceur", AnnonceurSchema);
