const mongoose = require("mongoose");

const PublicationSchema = mongoose.Schema({
  typePub: {
    type: String,
    enum: ["Activity", "Annonce", "Event"],
    default: "Activity",
  },
  image_url: {
    type: String,
  },
  description: {
    type: String,
  },
  categorie: {
    type: String,
  },
  adresse: {
    type: String,
  },
  nbr_place: {
    type: Number,
  },
  date_Pub: {
    type: Date,
    default: Date.now,
  },
  date_DebutPub: {
    type: Date,
  },
  heure_debutPub: {
    type: String,
  },
  date_FinPub: {
    type: Date,
  },
  heure_finPub: {
    type: String,
  },
  tarif: {
    type: Number,
  },
  image_url: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  participants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});
module.exports = mongoose.model("Publication", PublicationSchema);
