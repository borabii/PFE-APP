const mongoose = require("mongoose");

const AnnonceurSchema = new mongoose.Schema({
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
  descriptionAnnonceur: {
    type: String,
  },
  imageCouverture: {
    type: String,
  },

  horaireAnnonceur: [
    {
      jour: {
        type: String,
      },
      heureDebut: {
        type: String,
      },
      heureFin: {
        type: String,
      },
    },
  ],
  abonnéId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Abonné",
  },
});

module.exports = mongoose.model("Annonceur", AnnonceurSchema);
