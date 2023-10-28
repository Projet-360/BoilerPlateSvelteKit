// Import required modules and configurations
import winston from 'winston';
import dotenv from 'dotenv';
import path from 'path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const envPath = path.resolve(__dirname, './../.env');
dotenv.config({ path: envPath });

// Create a new logger instance
const logger = winston.createLogger({
  // Set the log level to 'info'
  level: 'info',
  // Format the log as JSON
  format: winston.format.json(),
  // Specify the log files
  transports: [
    // Log errors to a separate file
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    // Log all (including errors) to a combined log file
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

// If the application is not in production, also log to the console
if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new winston.transports.Console({
      // Use a simple text format for console logging
      format: winston.format.simple(),
    }),
  );
}

// Export the logger
export default logger;
