const mongoose = require("mongoose");
//define demandeAnnonceur Schema
const DemandeAnonnceurSchema = mongoose.Schema({
  nomAnnonceur: {
    type: String,
    required: true,
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
    required: true,
  },
  numTelAnnonceur: {
    type: String,
    required: true,
  },
  emailProAnnonceur: {
    type: String,
    required: true,
  },
  catégorieAnnonceur: {
    type: String,
    required: true,
  },
  justificatifAnnonceur: {
    type: String,
    required: true,
  },
  demandeur: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Abonné",
  },
  etatDemande: {
    type: String,
    enum: ["Accepter", "Refuser", "Vérification en cours"],
    default: "Vérification en cours",
  },
  demandeDate: {
    type: Date,
    default: Date.now,
  },
});
DemandeAnonnceurSchema.index({ adresseAnnonceur: "2dsphere" });

module.exports = mongoose.model("DemandeAnnonceur", DemandeAnonnceurSchema);
