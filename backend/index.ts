// Import required modules and configurations
import express, { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import http from 'http';
import initSocket from './services/socket.js';

import connectDB from './dbConnect.js'; // Database connection module

import applyMiddlewares from './middlewares/middlewares.js'; // Application middlewares
import logger from './services/logger.js';
import dotenv from 'dotenv';

// Import route modules
import checkAuthStatusRoutes from './routes/auth/checkAuthStatusRoutes.js';
import adminRoutes from './routes/auth/adminRoutes.js';
import userRoutes from './routes/auth/userRoutes.js';
import forgotRoutes from './routes/auth/forgotRoutes.js';
import signupRoutes from './routes/auth/signupRoutes.js';
import sessionRoutes from './routes/auth/sessionRoutes.js';
import greetingRoutes from './routes/greetingRoutes.js';
import loginRoutes from './routes/auth/loginRoutes.js';
import logoutRoutes from './routes/auth/logoutRoutes.js';
import confirmTokenRoutes from './routes/auth/confirmTokenRoutes.js';
import verifyRoutes from './routes/auth/verifyRoutes.js';

dotenv.config();

dotenv.config();
// Initialize database connection
connectDB();

// Initialize the Express app
const app = express();
const server = http.createServer(app);
const io = initSocket(server);

// Disable SSL certificate verification (Not recommended in production)
if (process.env.NODE_ENV === 'prod') {
  // Production settings here
  // For example: Enable SSL certificate verification
  (process.env as any)['NODE_TLS_REJECT_UNAUTHORIZED'] = '1';
} else {
  // Development settings here
  // WARNING: Do not disable SSL verification in production
  (process.env as any)['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
}

// Apply middlewares to the app
applyMiddlewares(app);

// Route definitions
app.use('/auth', checkAuthStatusRoutes);
app.use('/auth', adminRoutes);
app.use('/auth', userRoutes);

app.use('/auth', signupRoutes);
app.use('/auth', loginRoutes);
app.use('/auth', logoutRoutes);
app.use('/auth', verifyRoutes);
app.use('/auth', confirmTokenRoutes);

app.use('/auth', forgotRoutes);
app.use('/auth', sessionRoutes);

app.use('/api', greetingRoutes(io));

// Error handling middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const statusCode = err.statusCode || 500;
  // Log the error message and stack trace
  console.error(err.message, err.stack);
  // Send the error response
  res.status(statusCode).json({ message: err.message });
});

// Start the server on the defined port
server.listen(process.env.PORT, () => {
  // <-- Make sure to use 'server.listen', NOT 'app.listen'
  logger.info(`Server running on port ${process.env.PORT}`);
});

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
