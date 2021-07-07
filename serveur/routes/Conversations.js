const router = require("express").Router();
const Conversation = require("../models/Conversation");
const auth = require("../middleware/auth");
//new conv

router.post("/NewConv/:userId", auth, async (req, res) => {
  const newConversation = new Conversation({
    members: [req.user.id, req.params.userId],
  });
  // const savedConversation = [];
  try {
    const conversation = await Conversation.findOne({
      members: { $all: [req.params.userId, req.user.id] },
    });
    if (conversation) {
      res.status(200).json(true);
    } else {
      newConversation.save().then(res.status(200).json(true));
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//get  users in conv
router.get("/getUserConversation/:userId", auth, async (req, res) => {
  try {
    const conversation = await Conversation.find({
      members: { $in: [req.params.userId] },
    }).sort({ updatedAt: -1 });
    res.status(200).json(conversation);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get conv includes two userId
router.get("/find/:firstUserId/:secondUserId", async (req, res) => {
  try {
    const conversation = await Conversation.findOne({
      members: { $all: [req.params.firstUserId, req.params.secondUserId] },
    });
    res.status(200).json(conversation);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
