import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true, match: /.+\@.+\..+/ },
  password: { type: String, required: true },
  isVerified: { type: Boolean, default: false },
  resetToken: { type: String },
  resetTokenExpiration: { type: Date },
});

export default mongoose.model("User", userSchema);
