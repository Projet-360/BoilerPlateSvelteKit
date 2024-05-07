// Import required modules
import express, { Application } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

// Import custom modules and configurations
import corsConfig from '../config/corsConfig.js';
import errorHandler from './errorHandler.js';
import checkBlacklist from './checkBlacklist.js';
import { graphqlValidationMiddleware } from './validations/index.js';
import { graphLimiterMiddleware } from './graphLimiterMiddleware.js';

// Apply middlewares
export default (app: Application) => {
  //console.log('Applying CORS Middleware');
  app.use(cors(corsConfig));
  //console.log('CORS Middleware Applied');

  //console.log('Applying JSON Middleware');
  app.use(express.json());
  //console.log('JSON Middleware Applied');

  //console.log('Applying Cookie Middleware');
  app.use(cookieParser());
  //console.log('Cookie Middleware Applied');

  //console.log('Applying Blacklist Check');
  app.use(checkBlacklist);
  //console.log('Blacklist Check Applied');

  app.use('/graphql', graphLimiterMiddleware);

  //console.log('Applying GraphQL Validation Middleware');
  app.use('/graphql', graphqlValidationMiddleware);
  //console.log('GraphQL Validation Middleware Applied');

  //console.log('Applying Error Handler');
  app.use(errorHandler);
  //console.log('Error Handler Applied');
};
