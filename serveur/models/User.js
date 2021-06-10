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
    },
    email: {
      type: String,
      // required: true,
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
      enum: ["Super Admin", "Admin", "user"],
      default: "user",
    },
    status: {
      type: String,
      enum: ["active", "disabled"],
      default: "active",
    },
  },
  options
);
module.exports = mongoose.model("user", UserSchema);
