// src/lib/socket.js
import { io } from 'socket.io-client';
import { env } from '../env';

const socket = io(env.URL_BACK); // Remplacez par l'URL de votre serveur

export default socket;
