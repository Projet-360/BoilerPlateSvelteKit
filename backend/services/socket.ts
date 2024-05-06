import { Server as IOServer } from 'socket.io';
import { Server as HttpsServer } from 'https';
import corsConfig from '../config/corsConfig.js';

export default function initSocket(server: HttpsServer) {
  const io = new IOServer(server, {
    cors: corsConfig,
    transports: ['polling', 'websocket'],
  });

  return io;
}
