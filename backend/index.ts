// Import required modules and configurations
import express, { Request, Response, NextFunction } from 'express';
import connectDB from './dbConnect.js'; // Database connection module
import config from './config/config.js'; // Configuration settings
import applyMiddlewares from './middlewares/middlewares.js'; // Application middlewares
import mongoose from 'mongoose';

// Import route modules
import authRoutes from './routes/authRoutes.js';
import greetingRoutes from './routes/greetingRoutes.js';
import { env } from './constants/env.js';

// Initialize database connection
connectDB();

// Initialize the Express app
const app = express();

// Disable SSL certificate verification (Not recommended in production)
if (env.NODE_ENV === 'production') {
  // Production settings here
  // For example: Enable SSL certificate verification
  (env as any)['NODE_TLS_REJECT_UNAUTHORIZED'] = '1';
} else {
  // Development settings here
  // WARNING: Do not disable SSL verification in production
  (env as any)['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
}

// Apply middlewares to the app
applyMiddlewares(app);

// Route definitions
app.use('/auth', authRoutes);
app.use('/api', greetingRoutes);

// Error handling middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const statusCode = err.statusCode || 500;
  // Log the error message and stack trace
  console.error(err.message, err.stack);
  // Send the error response
  res.status(statusCode).json({ message: err.message });
});

// Start the server on the defined port
app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`);
});

// Graceful shutdown handlers for proper resource deallocation
process.on('SIGTERM', gracefulShutdown);
process.on('SIGINT', gracefulShutdown);

// Function for handling graceful shutdown
function gracefulShutdown() {
  console.log('\nReceived exit signal, shutting down gracefully.');

  // Close the MongoDB connection
  mongoose.connection.close((() => {
    console.log('MongoDB connection closed.');
    process.exit(0);
  }) as any);
}