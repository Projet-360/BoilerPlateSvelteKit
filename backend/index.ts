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

app.use((req: Request, res: Response, next: NextFunction) => {
  req.apolloContext = { next };
  next();
});

// Configuration d'Apollo Server
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req, res }) => ({
    req,
    res,
    next: req.apolloContext?.next,
    io, // Assurez-vous que io est correctement initialisé avant
  }),
});

// Start the ApolloServer
apolloServer.start().then(() => {
  // Apply ApolloServer middleware to Express app
  apolloServer.applyMiddleware({ app, path: '/graphql', cors: false });

  // app.use('/auth', adminRoutes);
  // app.use('/auth', userRoutes);

  // //app.use('/auth', forgotRoutes);
  // app.use('/auth', sessionRoutes);

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
