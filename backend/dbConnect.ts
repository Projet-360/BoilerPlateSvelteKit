// Import the required modules
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import logger from './services/logger.js';

dotenv.config();

// Asynchronous function to connect to the MongoDB database
const connectDB = async () => {
  try {
    // Attempt to connect to MongoDB using the determined URL
    await mongoose.connect(
      process.env.MONGO_ONLINE as string,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } as any,
    );

    // Log success message if the connection is established
    logger.info('Connected to MongoDB');
  } catch (err) {
    // Log the error message if the connection fails
    logger.error('Failed to connect to MongoDB', err);
    // Either propagate the error or return a rejected Promise
    return Promise.reject(err);
  }
};

export default connectDB;
