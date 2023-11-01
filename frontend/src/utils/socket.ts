// src/lib/socket.js
import { io } from 'socket.io-client';

const socket = io(import.meta.env.VITE_URL_BACK); // Remplacez par l'URL de votre serveur

export default socket;
