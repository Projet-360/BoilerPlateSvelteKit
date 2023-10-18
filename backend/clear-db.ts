import { MongoClient } from 'mongodb';
import { env } from './constants/env';

async function clearDB() {
	const client = new MongoClient(env.BD);

	try {
		await client.connect();
		const db = client.db(env.DB_NAME);
		const collections = await db.collections();

		for (const collection of collections) {
			await collection.deleteMany({});
		}
		console.log('Database cleared');
	} catch (err) {
		console.error(err);
	} finally {
		await client.close();
	}
}

clearDB();
