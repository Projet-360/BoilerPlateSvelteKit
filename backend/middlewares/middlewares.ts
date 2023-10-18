// Import required modules
import express, { Application } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

// Import custom modules and configurations
import corsConfig from '../config/corsConfig.js';
import errorHandler from './errorHandler.js';
import checkBlacklist from './checkBlacklist.js';

// Apply middlewares
export default (app: Application) => {
	// Apply CORS settings from external config file
	app.use(cors(corsConfig));

	// Parse incoming JSON payloads
	app.use(express.json());

	// Parse incoming cookies from the headers
	app.use(cookieParser());

	// Custom middleware to check if token is blacklisted
	app.use(checkBlacklist);

	// Custom error-handling middleware
	app.use(errorHandler);
};
