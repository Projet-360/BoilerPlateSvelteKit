import { MongoClient, ObjectId } from 'mongodb';
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

    // INSERTION DES DONNÉES DE BASE POUR LES UTILISATEURS

    const usersCollection = db.collection('users');
    await usersCollection.insertMany([
      {
        _id: new ObjectId('6535292976d3db78fbc95f3e'),
        username: 'Admin',
        email: 'admin@admin.fr',
        password:
          '$2a$12$Rd43bsIzTi3Dlwq7rgNCWuRHqOap82AdMCSSbFxYjqWmhG0hfBp/6', // Aaaaaaa8,
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
      // ... autres utilisateurs
    ]);

    // Utilisation de Winston pour le logging
    logger.info('Default users inserted');
  } catch (err) {
    // Utilisation de Winston pour le logging d'erreur
    logger.error(err);
  } finally {
    await client.close();
  }
}

clearDB();
