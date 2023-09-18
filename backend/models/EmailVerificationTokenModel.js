// EmailVerificationTokenModel.js
const mongoose = require("mongoose");

const emailVerificationTokenSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
  token: { type: String, required: true },
  expireAt: { type: Date, required: true },
});

module.exports = mongoose.model(
  "EmailVerificationToken",
  emailVerificationTokenSchema,
);
