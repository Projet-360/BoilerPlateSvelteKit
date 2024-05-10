import { MongoClient, ObjectId } from 'mongodb';
import dotenv from 'dotenv';
import logger from './logger.js';

dotenv.config();

const dbName = process.env.DATABASE_NAME;

async function clearDB() {
  const mongoOnlineUri = process.env.MONGO_ONLINE;
  if (!mongoOnlineUri) {
    logger.error('MongoDB URI is not defined in the environment variables.');
    return;
  }

  const client = new MongoClient(mongoOnlineUri);

  try {
    await client.connect();
    logger.info(`Connected to database: ${dbName}`);

    const db = client.db(dbName);
    const collections = await db.collections();

    logger.info(
      `Collections found: ${collections
        .map((c) => c.collectionName)
        .join(', ')}`,
    );

    for (const collection of collections) {
      const deleteResult = await collection.deleteMany({});
      logger.info(
        `Cleared collection: ${collection.collectionName}, documents deleted: ${deleteResult.deletedCount}`,
      );
    }

    const usersCollection = db.collection('users');
    const insertResult = await usersCollection.insertMany([
      {
        username: 'Admin',
        email: 'admin@admin.fr',
        password:
          '$2a$12$kO25xqCYiev6PMWLzjL7Yu6EnADDNZC7FAfK2T6SY6TbImaZgNtBi',
        isVerified: true,
        role: 'admin',
        __v: 0,
      },
      {
        username: 'User',
        email: 'user@user.fr',
        password:
          '$2a$12$kO25xqCYiev6PMWLzjL7Yu6EnADDNZC7FAfK2T6SY6TbImaZgNtBi',
        isVerified: true,
        role: 'user',
        __v: 0,
      },
      {
        username: 'Moderator',
        email: 'moderator@moderator.fr',
        password:
          '$2a$12$kO25xqCYiev6PMWLzjL7Yu6EnADDNZC7FAfK2T6SY6TbImaZgNtBi',
        isVerified: true,
        role: 'moderator',
        __v: 0,
      },
    ]);

    logger.info(`Default users inserted, count: ${insertResult.insertedCount}`);
  } catch (err) {
    if (err instanceof Error) {
      logger.error(`Error clearing database: ${err.message}`);
    } else {
      logger.error('An unexpected error occurred');
    }
  } finally {
    await client.close();
    logger.info('MongoClient connection closed');
  }
}

clearDB();
