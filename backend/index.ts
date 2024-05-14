import applyMiddlewares from './middlewares/index.js';
import setupServer from './services/setupServer.js';
import setupApolloServer from './services/setupApolloServer.js';
import startApolloServer from './services/startApolloServer.js';
import killServer from './services/killServer.js';

import dotenv from 'dotenv';
dotenv.config();

// Initialise Express app, HTTPS server, and Socket connection
const { app, server, io } = setupServer();

// Apply middlewares
applyMiddlewares(app);

// Set up Apollo Server
const apolloServer = setupApolloServer(app, io);

startApolloServer(apolloServer, server, app);

killServer();
