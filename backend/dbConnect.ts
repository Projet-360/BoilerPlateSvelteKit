// Import the required modules
import mongoose from 'mongoose';
import { env } from './constants/env.js';

// Asynchronous function to connect to the MongoDB database
const connectDB = async () => {
	try {
		// Attempt to connect to MongoDB using the provided environment variables
		await mongoose.connect(env.BD, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		} as any);
		// Log success message if the connection is established
		console.log('Connected to MongoDB');
	} catch (err) {
		// Log the error message if the connection fails
		console.error('Failed to connect to MongoDB', err);
		// Either propagate the error or return a rejected Promise
		return Promise.reject(err);
	}
};

// Export the connectDB function
export default connectDB;
