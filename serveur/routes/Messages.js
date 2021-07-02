const router = require("express").Router();
const Message = require("../models/Message");
const Conversation = require("../models/Conversation");
const moment = require("moment");

//add new message
router.post("/NewMsg", async (req, res) => {
  const newMessage = new Message(req.body);
  try {
    const savedMessage = await newMessage.save();
    res.status(200).json(savedMessage);
    await Conversation.findByIdAndUpdate(req.body.conversationId, {
      $set: {
        updatedAt: moment.utc().local().format(),
        lastMessage: req.body.text,
      },
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//get message fro given conversation id
router.get("/getMsg/:conversationId", async (req, res) => {
  try {
    const messages = await Message.find({
      conversationId: req.params.conversationId,
    });
    res.status(200).json(messages);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
