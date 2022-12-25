const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  // password: { type: String },
  // firstname: { type: String },
  // lastname: { type: String },
  // email: { type: String },
  createdAt: { type: Date, required: true, default: Date.now },
});

module.exports = mongoose.model("User", userSchema);
