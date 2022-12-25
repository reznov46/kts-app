const mongoose = require("mongoose");
const trainingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: Date, default: Date.now, required: true },
  gunsUsed: [{ type: mongoose.Schema.Types.ObjectId, ref: "Gun" }],
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: "Participant" }],
  ammoUsedAmmount: { type: Number },
});

module.exports = mongoose.model("Training", trainingSchema);
