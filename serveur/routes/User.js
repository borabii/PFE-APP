const express = require("express");
const router = express.Router();

const User = require("../models/User");
router.post("/signup", async (req, res) => {
  const {
    firstName,
    lastName,
    dateOfBirth,
    gendre,
    email,
    password,
  } = req.body;
  try {
    // User = model findOne on database
    let user = await User.findOne({ email: email });

    // if user (email) is already existed
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }

    user = new User({
      firstName,
      lastName,
      dateOfBirth,
      gendre,
      email,
      password, //password is not encrypted yet here
    });

    await user.save();
    res.send("User saved successfully !");
  } catch (err) {
    console.error(err.message);
    // 500 = server error
    res.status(500).send("Server Error");
  }
});
module.exports = router;
