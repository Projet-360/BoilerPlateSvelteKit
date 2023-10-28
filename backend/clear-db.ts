import { MongoClient, ObjectId } from 'mongodb';
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

const dbName = process.env.DATABASE_NAME;

if (!mongoUrl || !dbName) {
  throw new Error('Required environment variables are not set');
}

async function clearDB() {
  const client = new MongoClient(mongoUrl);

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
