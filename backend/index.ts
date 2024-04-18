import express from 'express';
import mongoose from 'mongoose';
import https from 'https';
import fs from 'fs';

import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './graphql/schemas/index.js';
import { resolvers } from './graphql/resolvers/index.js';

import { Server as SocketIOServer } from 'socket.io';
import connectDB from './dbConnect.js';
import applyMiddlewares from './middlewares/middlewares.js';
import logger from './services/logger.js';

import dotenv from 'dotenv';
dotenv.config();

// Initialize database connection
connectDB();

// Initialize the Express app
const app: any = express();

const keyPath = 'C:\\Web\\BoilerPlateSvelteKit\\backend\\SSL\\key.pem';
const certPath = 'C:\\Web\\BoilerPlateSvelteKit\\backend\\SSL\\cert.pem';

// Pass options to create HTTPS server
const httpsServer = https.createServer(
  {
    key: fs.readFileSync(keyPath),
    cert: fs.readFileSync(certPath),
  },
  app,
);

const io = new SocketIOServer(httpsServer);
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req, res }) => ({ req, res, io }),
});

apolloServer.start().then(() => {
  apolloServer.applyMiddleware({ app, path: '/graphql' });

  // Apply middlewares to the app
  applyMiddlewares(app);

  // Start the HTTPS server on the defined port
  httpsServer.listen(process.env.PORT, () => {
    logger.info(`Server running on port ${process.env.PORT}`);
    console.log(
      `GraphQL ready at https://localhost:${process.env.PORT}${apolloServer.graphqlPath}`,
    );
  });

  // Graceful shutdown handlers
  process.on('SIGTERM', gracefulShutdown);
  process.on('SIGINT', gracefulShutdown);
});

// Function for handling graceful shutdown
function gracefulShutdown() {
  logger.info('\nReceived exit signal, shutting down gracefully.');

  // Close the MongoDB connection
  mongoose.connection.close((() => {
    logger.info('MongoDB connection closed.');
    process.exit(0);
  }) as any);
}
