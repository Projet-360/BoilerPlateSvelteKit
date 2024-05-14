// Import required modules
import express, { Application } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

// Import custom modules and configurations
import corsConfig from '../config/corsConfig.js';
import errorHandler from './errorHandler.js';
import checkBlacklist from './checkBlacklist.js';
//import { graphqlValidationMiddleware } from './validations/index.js';
import { graphQLMiddleware } from './graphQLMiddleware.js';

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

  //console.log('Applying graphQLMiddleware Check');
  app.use('/graphql', graphQLMiddleware);
  //console.log('graphQLMiddleware Check Applied');

  //console.log('Applying Error Handler');
  app.use(errorHandler);
  //console.log('Error Handler Applied');
};
