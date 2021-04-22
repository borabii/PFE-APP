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
  discription: {
    type: String,
  },
  adresse: {
    type: String,
    required: true,
  },
  nbr_place: {
    type: Number,
    required: true,
  },
  date_Pub: {
    type: Date,
    default: Date.now,
  },
  date_DebutPUb: {
    type: Date,
  },
  date_FinPUb: {
    type: Date,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});
module.exports = mongoose.model("Publication", PublicationSchema);
