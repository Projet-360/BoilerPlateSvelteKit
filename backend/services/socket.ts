import { Server } from 'http';
import { Server as IOServer } from 'socket.io';
import logger from './logger.js';
import corsConfig from '../config/corsConfig.js';

export default function initSocket(httpServer: Server) {
  const io = new IOServer(httpServer, {
    cors: corsConfig,
  });

  io.on('connection', (socket) => {
    logger.info(`New client connected: ${socket.id}`);

    socket.on('saveGreetingSocket', () => {
      logger.info(`Greeting sent from client: ${socket.id}`);
      io.emit('updateGreetings');
    });

    socket.on('deleteGreetingSocket', () => {
      logger.info(`Greeting deleted from client: ${socket.id}`);
      io.emit('updateGreetings');
    });

    socket.on('disconnect', () => {
      logger.info(`Client disconnected: ${socket.id}`);
    });
  });
  return io;
}
