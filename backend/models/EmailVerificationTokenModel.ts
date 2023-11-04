// Import required modules
import mongoose from 'mongoose';

// Define the email verification token schema
const emailVerificationTokenSchema = new mongoose.Schema({
  // Reference to User model
  _id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  // Token string, required
  token: { type: String, required: true },
  // Expiry date for the token, required
  expireAt: { type: Date, required: true },
});

// Export the EmailVerificationToken model
export default mongoose.model(
  'EmailVerificationToken',
  emailVerificationTokenSchema,
);
