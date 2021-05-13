const mongoose = require("mongoose");

const CatégorieSchema = new mongoose.Schema({
  typeCatégorie: {
    type: String,
  },
  imageCatégorie: {
    type: String,
  },

  addDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Catégorie", CatégorieSchema);
