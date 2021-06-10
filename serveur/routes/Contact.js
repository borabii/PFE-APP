const express = require("express");
const router = express.Router();
const Contact = require("../models/ContactUs");

router.post("/ContactUs", async (req, res) => {
  const { nom, email, message } = req.body;
  try {
    contact = new Contact({
      nom,
      email,
      message,
    });
    await contact.save();
    res.send("ddd");
  } catch (err) {
    console.log(err);
  }
});
router.get("/Admin/getContact", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ DateEnvoie: -1 });
    res.send(contacts);
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;
