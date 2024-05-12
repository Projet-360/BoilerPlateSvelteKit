// Import required modules
import mongoose from 'mongoose';

// Define the user schema
const userModel = new mongoose.Schema<TS.IUser>({
  // Username field, required
  username: { type: String, required: true },
  // Email field, required, must be unique, and match the given regular expression
  email: { type: String, required: true, unique: true, match: /.+\@.+\..+/ },
  // Password field, required
  password: { type: String, required: true },
  // Verification status, defaults to false
  isVerified: { type: Boolean, default: false },
  // Reset token for password reset
  resetToken: { type: String },
  // Expiry time for the reset token
  resetTokenExpiration: { type: Date },
  // Role of the user, defaults to 'user'
  deleteToken: { type: String },
  deleteTokenExpiration: { type: Date },
  role: {
    type: String,
    default: 'user',
    // Valid enum values for the role
    enum: ['user', 'admin', 'moderator'],
  },
});

// Export the User model
export const User = mongoose.model<TS.IUser>('User', userModel);
