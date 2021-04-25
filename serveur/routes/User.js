const express = require("express");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("config");

const Abonné = require("../models/Abonné");
const Admin = require("../models/Admin");

const router = express.Router();
//signUp(user/abonné) endpoint
router.post("/signup", async (req, res) => {
  const {
    firstName,
    lastName,
    dateOfBirth,
    gendre,
    email,
    password,
    imageProfile,
    adress,
  } = req.body;
  try {
    let abonné = await Abonné.findOne({ email: email });

    // if abonné (email) is already existed
    if (abonné) {
      return res.status(400).json({ msg: "User already exists" });
    }

    abonné = new Abonné({
      firstName,
      lastName,
      dateOfBirth,
      gendre,
      email,
      password,
      imageProfile,
      adress,
    });
    // encrypt password before store do database
    const salt = await bcrypt.genSalt(10);
    //add crypted password to user object before store it to db
    abonné.password = await bcrypt.hash(password, salt);

    await abonné.save();

    const payload = {
      user: {
        id: abonné.id,
      },
    };

    // jwtSecret is declared on default.json ("secret")
    jwt.sign(
      payload,
      config.get("jwtSecret"),
      {
        expiresIn: 360000, //3600 sec = 1 hour
      },
      (err, token) => {
        if (err) throw err;

        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
//add Admin endpoint
router.post("/addAdmin", async (req, res) => {
  const {
    firstName,
    lastName,
    dateOfBirth,
    gendre,
    email,
    password,
    imageProfile,
    adress,
    permission,
  } = req.body;
  try {
    let admin = await Admin.findOne({ email: email });

    // if abonné (email) is already existed
    if (admin) {
      return res.status(400).json({ msg: "User already exists" });
    }

    admin = new Admin({
      firstName,
      lastName,
      dateOfBirth,
      gendre,
      email,
      password,
      imageProfile,
      adress,
      permission,
    });
    // encrypt password before store do database
    const salt = await bcrypt.genSalt(10);
    //add crypted password to user object before store it to db
    admin.password = await bcrypt.hash(password, salt);

    await admin.save();

    const payload = {
      user: {
        id: admin.id,
      },
    };

    // jwtSecret is declared on default.json ("secret")
    jwt.sign(
      payload,
      config.get("jwtSecret"),
      {
        expiresIn: 360000, //3600 sec = 1 hour
      },
      (err, token) => {
        if (err) throw err;

        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
//
router.get("/Admin/abonne", async (req, res) => {
  try {
    const abonne = await Abonné.find({ isAnnonceur: "true" });
    res.json(abonne);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error get contacts");
  }
});
module.exports = router;
