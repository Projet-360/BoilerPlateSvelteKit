import express, { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';

import applyMiddlewares from './middlewares/middlewares.js';
import logger from './services/logger.js';
import setupServer from './setupServer.js';
import setupApolloServer from './setupApolloServer.js';

import dotenv from 'dotenv';
dotenv.config();

// Initialise Express app, HTTPS server, and Socket connection
const { app, server, io } = setupServer();

// Apply middlewares
applyMiddlewares(app);

// Set up Apollo Server
const apolloServer = setupApolloServer(app, io);

// Start the ApolloServer
apolloServer.start().then(() => {
  // Apply ApolloServer middleware to Express app
  apolloServer.applyMiddleware({ app, path: '/graphql', cors: false });

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
