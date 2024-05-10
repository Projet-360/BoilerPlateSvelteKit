import { setupHttpsServer } from '../config/https.js';
import connectDB from './dbConnect.js';
import express, { Application } from 'express';
import initSocket from './socket.js';

/**
 * Initializes the server by connecting to the database, setting up Express app, HTTPS server, and Socket connection.
 *
 * @return {Object} An object containing the Express app, HTTPS server, and Socket connection.
 */
const setupServer = () => {
  connectDB();

  // Initialize the Express app
  const app: Application = express();

  // Setup the HTTPS
  const server = setupHttpsServer(app);

  // Setup the Socket
  const io = initSocket(server);

  return {
    app,
    server,
    io,
  };
};

export default setupServer;
