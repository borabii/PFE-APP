const mongoose = require("mongoose");
//define demandeAnnonceur Schema
const DemandeAnonnceurSchema = mongoose.Schema({
  nomAnnonceur: {
    type: String,
  },
  adresseAnnonceur: {
    type: String,
  },
  numTelAnnonceur: {
    type: String,
  },
  emailProAnnonceur: {
    type: String,
  },
  catégorieAnnonceur: {
    type: String,
  },
  justificatifAnnonceur: {
    type: String,
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
module.exports = mongoose.model("DemandeAnnonceur", DemandeAnonnceurSchema);
