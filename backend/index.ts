import express, { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';

import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './graphql/schemas/index.js';
import { resolvers } from './graphql/resolvers/index.js';

import initSocket from './services/socket.js';

import connectDB from './dbConnect.js'; // Database connection module

import applyMiddlewares from './middlewares/middlewares.js'; // Application middlewares
import logger from './services/logger.js';
import { setupHttpsServer } from './config/https.js';

// Import route modules
import checkAuthStatusRoutes from './routes/auth/checkAuthStatusRoutes.js';
import adminRoutes from './routes/auth/adminRoutes.js';
import userRoutes from './routes/auth/userRoutes.js';
import forgotRoutes from './routes/auth/forgotRoutes.js';
import sessionRoutes from './routes/auth/sessionRoutes.js';
import loginRoutes from './routes/auth/loginRoutes.js';
import logoutRoutes from './routes/auth/logoutRoutes.js';
import confirmTokenRoutes from './routes/auth/confirmTokenRoutes.js';

import dotenv from 'dotenv';
dotenv.config();

// Initialize database connection
connectDB();

// Initialize the Express app
const app: any = express();

// Setup the HTTPS
const server = setupHttpsServer(app);

// Setup the Socket
const io = initSocket(server);

// Apply middlewares to the app
applyMiddlewares(app);

// Setup the Apollo Server
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req, res }) => {
    // Ici, tu peux accéder et afficher des informations de débogage si nécessaire
    console.log('Apollo context accessed');
    console.log(req.body); // Afficher le corps de la requête pour le débogage
    console.log(`Request from ${req.ip}`); // Afficher l'IP pour le débogage

    // Assure-toi que 'io' est correctement initialisé et disponible ici si tu en as besoin
    return { req, res, io }; // Ajoute 'io' si tu utilises Socket.io ou une fonctionnalité similaire
  },
});

// Start the ApolloServer
apolloServer.start().then(() => {
  // Apply ApolloServer middleware to Express app
  apolloServer.applyMiddleware({ app, path: '/graphql' });
  // Route definitions
  app.use('/auth', checkAuthStatusRoutes);
  app.use('/auth', adminRoutes);
  app.use('/auth', userRoutes);

  app.use('/auth', loginRoutes);
  app.use('/auth', logoutRoutes);
  app.use('/auth', confirmTokenRoutes);

  app.use('/auth', forgotRoutes);
  app.use('/auth', sessionRoutes);

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
