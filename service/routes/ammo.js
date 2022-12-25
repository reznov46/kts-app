const express = require("express");
const router = express.Router();
const Ammo = require("../models/ammo");

router.get("/", async (req, res) => {
  try {
    const ammo = await Ammo.find();
    res.json(ammo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  const ammo = new Ammo({
    caliber: req.body.caliber,
    amount: req.body.amount,
  });
  try {
    const newAmmo = await ammo.save();
    res.status(201).json(newAmmo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/:id", getAmmo, (req, res) => {
  res.json(res.Ammo);
});
router.delete("/:id", getAmmo, async (req, res) => {
  try {
    await res.Ammo.remove();
    res.json({ message: "Deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.patch("/:id", getAmmo, async (req, res) => {
  console.log("Ammo");
  if (req.body.amount !== null) {
    res.ammo.amount = Number(req.body.amount);
  }
  if (req.body.caliber !== null) {
    res.ammo.caliber = req.body.caliber;
  }
  try {
    const updatedAmmo = await res.ammo.save();
    res.json(updatedAmmo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

async function getAmmo(req, res, next) {
  let ammo = null;
  try {
    ammo = await Ammo.findById(req.params.id);
    if (ammo == null) {
      return res.status(404).json({ message: "Cannot find ammunition" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  res.ammo = ammo;
  next();
}

module.exports = router;
