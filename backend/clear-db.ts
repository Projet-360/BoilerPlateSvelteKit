import { MongoClient, ObjectId } from 'mongodb';
import dotenv from 'dotenv';
import logger from './services/logger.js';

dotenv.config();

const dbName = process.env.DATABASE_NAME;

async function clearDB() {
  const client = new MongoClient(process.env.MONGO_ONLINE as string);

  try {
    await client.connect();
    const db = client.db(dbName);
    const collections = await db.collections();

    for (const collection of collections) {
      await collection.deleteMany({});
    }

    // Using Winston for logging
    logger.info('Database cleared');

    // INSERTING BASE DATA FOR USERS
    const usersCollection = db.collection('users');
    await usersCollection.insertMany([
      {
        _id: new ObjectId('6535292976d3db78fbc95f3e'),
        username: 'Admin',
        email: 'admin@admin.fr',
        password:
          '$2a$12$Rd43bsIzTi3Dlwq7rgNCWuRHqOap82AdMCSSbFxYjqWmhG0hfBp/6',
        isVerified: true,
        role: 'admin',
        __v: 0,
      },
      {
        _id: new ObjectId('65352a1b76d3db78fbc95f46'),
        username: 'User',
        email: 'user@user.fr',
        password:
          '$2a$12$Rd43bsIzTi3Dlwq7rgNCWuRHqOap82AdMCSSbFxYjqWmhG0hfBp/6',
        isVerified: true,
        role: 'user',
        __v: 0,
      },
      // ... other users
    ]);

    // Using Winston for logging
    logger.info('Default users inserted');
  } catch (err) {
    // Using Winston for error logging
    logger.error(err);
  } finally {
    await client.close();
  }
}

clearDB();
