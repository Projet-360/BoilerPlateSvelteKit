import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

/**
 * Establish a connection to MongoDB.
 */
export const connectToDatabase = async (): Promise<void> => {
	try {
		await mongoose.connect(process.env.MONGO_ONLINE as string, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		});
		console.log('Successfully connected to MongoDB.');
	} catch (error) {
		console.error('Error connecting to MongoDB:', error);
		process.exit(1);
	}
};

/**
 * Establishes a connection to the database.
 * Throws an error if the connection fails.
 */
export const useDatabaseConnection = async () => {
	if (mongoose.connection.readyState === 0) {
		try {
			await connectToDatabase();
		} catch (error) {
			console.error('Error connecting to database:', error);
			throw new Error('Database Connection Error');
		}
	}
};
