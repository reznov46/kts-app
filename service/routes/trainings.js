const express = require("express");
const Training = require("../models/training");
const Gun = require("../models/gun")
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
    date:  new Date(req.body.date),
    gunsUsed: []
  });
  try {
    const newTraining = await training.save();
    res.status(201).json(newTraining);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/addGuns", getTraining, async( req, res) => {
  const gunsToAdd = req.body.gunsToAdd;
  gunsToAdd.forEach((gun) => {
    const gunToAdd = findGun(gun);
      res.training.gunsUsed.push(gunToAdd);
  })
  const trainigWithAddesGuns = await res.training.save();
})

async function findGun(gunId) {
  const foundGun = await Gun.findById(gunId);
  return foundGun;
}

router.get("/:id", getTraining, (req, res) => {
  res.json(res.training);
});
router.delete("/:id", getTraining, async (req, res) => {
  try {
    await res.trainig.remove();
    res.json({ message: "Deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  res.send(res.training.name);
});

router.patch("/:id", getTraining, async (req, res) => {
  if (req.body.name !== null) {
    res.trainig.name = req.body.name;
  }
  try {
    const updatedTraining = await res.training.save();
    res.json(updatedTraining);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

async function getTraining(req, res, next) {
  let training = null;
  try {
    training = await Training.findById(req.body.id);
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
