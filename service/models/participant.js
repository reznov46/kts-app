const mongoose = require("mongoose");
const ammo = require("./ammo");
const participantSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  ammoUsed: [{ caliber: { type: String }, amount: { type: Number } }],
});
module.exports = mongoose.model("Participant", participantSchema);
