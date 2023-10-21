import { MongoClient } from 'mongodb';
import { env } from './constants/env.js';
import logger from './services/logger.js';

async function clearDB() {
  const client = new MongoClient(env.BD);

  try {
    await client.connect();
    const db = client.db(env.DB_NAME);
    const collections = await db.collections();

    for (const collection of collections) {
      await collection.deleteMany({});
    }

    // Utilisation de Winston pour le logging
    logger.info('Database cleared');
  } catch (err) {
    // Utilisation de Winston pour le logging d'erreur
    logger.error(err);
  } finally {
    await client.close();
  }
}

clearDB();
