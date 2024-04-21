const express = require("express");
const bcrybt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("config");

const router = express.Router();
const User = require("../models/User");
const auth = require("../middleware/auth"); //middleware next()

//load without password  data after login
router.get("/", auth, async (req, res) => {
  try {
    // req.user = decoded.user;     next();
    const user = await User.findById(req.user.id).select("-password"); //select without password
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

//login endpoint (public access)
router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email: email });
    if (!user) {
      res.status(400).json({ msg: "Email ou mots de passe invalide" });
    }
    const isMatchPassword = await bcrybt.compare(password, user.password);
    if (!isMatchPassword) {
      return res.status(400).json({ msg: "Email ou mots de passe invalide" });
    }

    const payload = {
      user: {
        id: user.id,
      },
    };
    const token = jwt.sign(payload, config.get("jwtSecret"), {
      expiresIn: 360000, //3600 sec = 1 hour
    });
    res.json({
      token,
      role: user.role,
      user,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
