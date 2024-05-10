import { Request, Response, NextFunction } from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './graphql/schemas/index.js';
import { resolvers } from './graphql/resolvers/index.js';

/**
 * Sets up the Apollo Server for the application.
 *
 * @param {any} app - The Express application.
 * @param {any} io - The Socket.IO instance.
 * @return {void} This function does not return a value.
 */
const setupApolloServer = (app: any, io: any) => {
  app.use((req: Request, res: Response, next: NextFunction) => {
    req.apolloContext = { next };
    next();
  });

  // Configuration d'Apollo Server
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req, res }) => ({
      req,
      res,
      next: req.apolloContext?.next,
      io,
    }),
  });

  return apolloServer;
};

export default setupApolloServer;
