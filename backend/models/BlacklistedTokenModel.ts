// Import required modules
import mongoose from 'mongoose';

// Define the blacklisted token schema
const BlacklistedTokenSchema = new mongoose.Schema({
  // Token string, required and must be unique
  token: { type: String, required: true, unique: true },
  // Created at timestamp, defaults to current time
  createdAt: {
    type: Date,
    default: Date.now,
    // Token will be automatically removed after 1 hour
    expires: '1h',
  },
});

// Export the BlacklistedToken model
export default mongoose.model('BlacklistedToken', BlacklistedTokenSchema);
