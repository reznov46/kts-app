const mongoose = require("mongoose");
const ammoSchema = new mongoose.Schema({
  caliber: { type: String, require: true },
  amount: { type: Number, require: false },
});

module.exports = mongoose.model("Ammo", ammoSchema);
