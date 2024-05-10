// Importation des modules nécessaires
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import logger from './logger.js';

// Activation de la configuration à partir des variables d'environnement
dotenv.config();

/**
 * Asynchronous function to connect to the MongoDB database.
 * It reads the database connection string from the environment variables,
 * attempts to connect to MongoDB using the Mongoose library, and logs the outcome.
 *
 * @async
 * @function connectDB
 * @returns {Promise<void>} A promise that resolves if the connection is successful, or rejects with an error.
 */
const connectDB = async () => {
  try {
    // Construction de l'URI de connexion à partir des variables d'environnement
    const mongoURI = `${process.env.MONGO_ONLINE}${process.env.DATABASE_NAME}`;

    // Tentative de connexion à la base de données MongoDB
    await mongoose.connect(
      mongoURI as string,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } as any,
    );

    // Enregistrement d'un message de succès si la connexion est établie
    logger.info('Connected to MongoDB');
  } catch (err) {
    // Enregistrement du message d'erreur en cas d'échec de la connexion
    logger.error('Failed to connect to MongoDB', err);
    // Propagation de l'erreur
    throw err;
  }
};

// Exportation de la fonction connectDB pour utilisation dans d'autres parties de l'application
export default connectDB;
