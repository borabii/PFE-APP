const mongoose = require("mongoose");
//define Reclamation Schema
const ReclamationSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  reportedUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },

  cause: {
    type: String,
  },
  reportDate: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("Reclamation", ReclamationSchema);
