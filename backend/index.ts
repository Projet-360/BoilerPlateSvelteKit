import applyMiddlewares from './middlewares/middlewares.js';
import setupServer from './setupServer.js';
import setupApolloServer from './setupApolloServer.js';
import startApolloServer from './startApolloServer.js';
import killServer from './killServer.js';

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
