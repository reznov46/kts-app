const mongoose = require("mongoose");
const trainingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: Date, default: Date.now, required: true },
  gunsUsed: [{ type: mongoose.Schema.Types.ObjectId, ref: "Gun" }],
});

module.exports = mongoose.model("Training", trainingSchema);
