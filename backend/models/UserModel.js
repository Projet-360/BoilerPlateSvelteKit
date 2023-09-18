const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true, match: /.+\@.+\..+/ }, // Validation sommaire par regex
  password: { type: String, required: true },
  isVerified: { type: Boolean, default: false },
});

module.exports = mongoose.model("User", userSchema);
