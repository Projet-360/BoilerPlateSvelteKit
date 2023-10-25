// mongoClient.js
import { MongoClient } from 'mongodb';
import { MONGO_URL } from '$env/static/private';

// Initialize MongoDB client
const client = new MongoClient(MONGO_URL);

/**
 * Start MongoDB connection.
 * @async
 * @return {Promise} Resolves when the connection is established.
 */
export async function start_mongo() {
	console.log('Starting mongo...');
	try {
		await client.connect();
		console.log('MongoDB connected successfully');
		getDatabase(); // Appel de getDatabase ici
	} catch (err) {
		console.error('Failed to connect to MongoDB', err);
		throw err;
	}
}

/**
 * Get database instance
 * @return {MongoClient} MongoDB Database instance
 */
export function getDatabase() {
	const db = client.db('sample_guides');
	console.log('Database instance:', db); // Log the database instance for debugging

	// Optionally, if you want to log some specific collection as a sample
	db.collection('planets')
		.find({})
		.limit(1)
		.toArray()
		.then((docs) => {
			console.log("Sample document from 'planets' collection:", docs);
		})
		.catch((err) => {
			console.error("Error fetching sample document from 'planets':", err);
		});

	return db;
}
