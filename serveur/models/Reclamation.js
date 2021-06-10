const mongoose = require("mongoose");
//define Reclamation Schema
const ReclamationSchema = mongoose.Schema({
  IdSignialeur: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Abonné",
  },
  IdReclameur: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Abonné",
  },

  cause: {
    type: String,
  },
  demandeDate: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("Reclamation", ReclamationSchema);
