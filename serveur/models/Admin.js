const mongoose = require("mongoose");
const User = require("./User");

const AdminSchema = User.discriminator(
  "Admin",
  new mongoose.Schema({
    permission: {
      type: String,
      required: true,
    },
  })
);
module.exports = mongoose.model("Admin");
