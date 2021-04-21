const mongoose = require("mongoose");
const options = { discriminatorKey: "Role" };
//define user Schema
const UserSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    gendre: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    inscriDate: {
      type: Date,
      default: Date.now,
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
  },
  options
);
module.exports = mongoose.model("user", UserSchema);
