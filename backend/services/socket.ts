import { Server as IOServer } from 'socket.io';
import { Server as HttpsServer } from 'https';
import corsConfig from '../config/corsConfig.js';

/**
 * Initializes a new Socket.IO server attached to an existing HTTPS server.
 * It configures the socket server with CORS and transport settings.
 *
 * @param {HttpsServer} server - The HTTPS server to which the Socket.IO server will be attached.
 * @returns {IOServer} The initialized Socket.IO server.
 */
export default function initSocket(server: HttpsServer): IOServer {
  // Create a new instance of IOServer, passing the HTTPS server and configuration options
  const io = new IOServer(server, {
    cors: corsConfig, // CORS configuration imported from external config file
    transports: ['polling', 'websocket'], // Specify the transports to be used
  });

  // Return the newly created Socket.IO server
  return io;
}
