const express = require("express");
const Training = require("../models/training");
const Gun = require("../models/gun");
const router = express.Router();
router.get("/", async (req, res) => {
  try {
    const training = await Training.find()
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
  await res.training.gunsUsed.push(await Gun.findById(req.body.gunsToAdd[0]));
  try {
    const updatedTraining = await res.training.save();
    res.json(updatedTraining);
  } catch (error) {
    res.status(400).json({ message: error.message });
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
