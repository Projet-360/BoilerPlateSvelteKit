import mongoose from "mongoose";

const emailVerificationTokenSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
  token: { type: String, required: true },
  expireAt: { type: Date, required: true },
});

export default mongoose.model(
  "EmailVerificationToken",
  emailVerificationTokenSchema,
);
