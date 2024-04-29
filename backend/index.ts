import express, { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import https from 'https';
import fs from 'fs';

import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './graphql/schemas/index.js';
import { resolvers } from './graphql/resolvers/index.js';

import initSocket from './services/socket.js';

import connectDB from './dbConnect.js'; // Database connection module

import applyMiddlewares from './middlewares/middlewares.js'; // Application middlewares
import logger from './services/logger.js';

// Import route modules
import checkAuthStatusRoutes from './routes/auth/checkAuthStatusRoutes.js';
import adminRoutes from './routes/auth/adminRoutes.js';
import userRoutes from './routes/auth/userRoutes.js';
import forgotRoutes from './routes/auth/forgotRoutes.js';
import signupRoutes from './routes/auth/signupRoutes.js';
import sessionRoutes from './routes/auth/sessionRoutes.js';
import greetingRoutes from './routes/greetingRoutes.js';
import loginRoutes from './routes/auth/loginRoutes.js';
import logoutRoutes from './routes/auth/logoutRoutes.js';
import confirmTokenRoutes from './routes/auth/confirmTokenRoutes.js';
import verifyRoutes from './routes/auth/verifyRoutes.js';

import dotenv from 'dotenv';
dotenv.config();

// Initialize database connection
connectDB();

// Initialize the Express app
const app: any = express();

// Vérifier si les chemins des clés et des certificats sont définis
if (!process.env.KEYPATH || !process.env.CERTPATH) {
  console.error('Les chemins des clés ou des certificats ne sont pas définis.');
  process.exit(1); // Arrêter le processus en cas d'erreur
}

// Vérifier si les fichiers de clé et de certificat existent
if (
  !fs.existsSync(process.env.KEYPATH) ||
  !fs.existsSync(process.env.CERTPATH)
) {
  console.error(
    "Les fichiers de clé ou de certificat n'existent pas aux emplacements spécifiés.",
  );
  process.exit(1); // Arrêter le processus en cas d'erreur
}

const server = https.createServer(
  {
    key: fs.readFileSync(process.env.KEYPATH),
    cert: fs.readFileSync(process.env.CERTPATH),
  },
  app,
);

const io = initSocket(server);

// Apply middlewares to the app
applyMiddlewares(app);

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({
    io,
    req,
  }),
});

// Start the ApolloServer
apolloServer.start().then(() => {
  // Apply ApolloServer middleware to Express app
  apolloServer.applyMiddleware({ app, path: '/graphql' });

  // Route definitions
  app.use('/auth', checkAuthStatusRoutes);
  app.use('/auth', adminRoutes);
  app.use('/auth', userRoutes);

  app.use('/auth', signupRoutes);
  app.use('/auth', loginRoutes);
  app.use('/auth', logoutRoutes);
  app.use('/auth', verifyRoutes);
  app.use('/auth', confirmTokenRoutes);

  app.use('/auth', forgotRoutes);
  app.use('/auth', sessionRoutes);

  app.use('/api', greetingRoutes(io));

  // Error handling middleware
  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    const statusCode = err.statusCode || 500;
    // Log the error message and stack trace
    console.error(err.message, err.stack);
    // Send the error response
    res.status(statusCode).json({ message: err.message });
  });

  // Start the server on the defined port
  server.listen(process.env.PORT, () => {
    // <-- Make sure to use 'server.listen', NOT 'app.listen'
    logger.info(`Server running on port ${process.env.PORT}`);
    const serverUrl = `https://localhost:${process.env.PORT}/graphql`;
    console.log('GraphQL API URL:', serverUrl);
    logger.info(`Server running on port ${process.env.PORT}`);
  });
});

// Graceful shutdown handlers for proper resource deallocation
process.on('SIGTERM', gracefulShutdown);
process.on('SIGINT', gracefulShutdown);

// Function for handling graceful shutdown
function gracefulShutdown() {
  logger.info('\nReceived exit signal, shutting down gracefully.');

  // Close the MongoDB connection
  mongoose.connection.close((() => {
    logger.info('MongoDB connection closed.');
    process.exit(0);
  }) as any);
}
