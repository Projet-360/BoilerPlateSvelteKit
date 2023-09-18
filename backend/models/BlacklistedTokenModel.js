const mongoose = require("mongoose");

const BlacklistedTokenSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: "1h", // Ce token sera supprimé automatiquement après 1 heure
  },
});

module.exports = mongoose.model("BlacklistedToken", BlacklistedTokenSchema);
