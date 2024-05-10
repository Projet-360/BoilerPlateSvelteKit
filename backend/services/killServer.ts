import mongoose from 'mongoose';
import logger from './logger.js';

/**
 * A function that handles graceful shutdown of the server.
 */
const killServer = () => {
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
};

export default killServer;
