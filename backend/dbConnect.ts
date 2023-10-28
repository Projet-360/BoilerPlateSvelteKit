// Import the required modules
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import logger from './services/logger.js';

import path from 'path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const envPath = path.resolve(__dirname, './../.env');
dotenv.config({ path: envPath });

if (
  !process.env.MONGO_LOCAL ||
  !process.env.MONGO_ONLINE ||
  !process.env.DATABASE_NAME
) {
  throw new Error('Required environment variables are not set');
}

let mongoUrl: string;

switch (process.env.DB_ENV) {
  case 'local':
    mongoUrl = process.env.MONGO_LOCAL as string;
    break;
  case 'atlas':
    mongoUrl = process.env.MONGO_ONLINE as string;
    break;
  default:
    throw new Error('Invalid DB_ENV value');
}

if (!mongoUrl) {
  throw new Error('Required environment variable for MongoDB URL is not set');
}

// Asynchronous function to connect to the MongoDB database
const connectDB = async () => {
  try {
    // Attempt to connect to MongoDB using the determined URL
    await mongoose.connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as any);

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
