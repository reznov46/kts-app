const express = require("express");
const Training = require("../models/training");
const Gun = require("../models/gun");
const Participant = require("../models/participant");
const User = require("../models/user");
const router = express.Router();
router.get("/", async (req, res) => {
  try {
    const training = await Training.find();
    res.json(training);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  const training = new Training({
    name: req.body.name,
    date: new Date(req.body.date),
  });
  try {
    const newTraining = await training.save();
    res.status(201).json(newTraining);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.patch("/addGuns", getTraining, async (req, res) => {
  req.body.gunsToAdd.forEach(async (gun) => {
    await res.training.gunsToAdd.push(await Gun.findById(gun._id));
  });
  try {
    const updatedTraining = await res.training.save();
    res.json(updatedTraining);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.patch("/addParticipants", getTraining, async (req, res) => {
  req.body.participantsToAdd.forEach(async (participant) => {
    const newParticipant = new Participant({
      user: await User.findById(participant._id),
      ammoUsed: [],
    });
    participant.ammoUsed.forEeach((ammo) => {
      newParticipant.ammoUsed.push({
        caliber: ammo.caliber,
        amount: ammo.amount,
      });
    });
    await res.training.participants.push();
  });
  try {
    const updatedTraining = await res.training.save();
    res.json(updatedTraining);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/:id/:populate", async (req, res) => {
  const trainigId = req.params.id != null ? req.params.id : req.body.id;
  let training = null;
  try {
    training = await Training.findOne({ _id: trainigId })
      .populate("gunsUsed")
      .populate("participants");
    if (training == null) {
      return res.status(404).json({ message: "Cannot find training" });
    }
    res.json(training);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/:id", getTraining, (req, res) => {
  res.json(res.training);
});
router.delete("/:id", getTraining, async (req, res) => {
  try {
    await res.training.remove();
    res.json({ message: "Deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  res.send(res.training.name);
});

router.patch("/:id", getTraining, async (req, res) => {
  if (req.body.name !== null) {
    res.training.name = req.body.name;
  }
  try {
    const updatedTraining = await res.training.save();
    res.json(updatedTraining);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

async function getTraining(req, res, next) {
  const trainigId = req.params.id != null ? req.params.id : req.body.id;
  let training = null;
  try {
    training = await Training.findOne({ _id: trainigId });

    if (training == null) {
      return res.status(404).json({ message: "Cannot find training" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  res.training = training;
  next();
}

module.exports = router;
