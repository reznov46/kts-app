const express = require("express");
const router = express.Router();
const Gun = require("../models/gun");
router.get("/", async (req, res) => {
  try {
    const guns = await Gun.find();
    res.json(guns);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  const gun = new Gun({
    name: req.body.name,
  });
  try {
    const newGun = await gun.save();
    res.status(201).json(newGun);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/:id", getGun, (req, res) => {
  res.json(res.gun);
});
router.delete("/:id", getGun, async (req, res) => {
  try {
    await res.gun.remove();
    res.json({ message: "Deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.patch("/:id", getGun, async (req, res) => {
  if (req.body.name !== null) {
    res.gun.name = req.body.name;
  }
  try {
    const updatedGun = await res.gun.save();
    res.json(updatedGun);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

async function getGun(req, res, next) {
  let gun = null;
  try {
    gun = await Gun.findById(req.params.id);
    if (gun == null) {
      return res.status(404).json({ message: "Cannot find gun" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  res.gun = gun;
  next();
}

module.exports = router;
