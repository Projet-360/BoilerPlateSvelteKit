import { ApolloServer } from 'apollo-server-express';
import { Server as HttpsServer } from 'https';
import logger from './logger.js';

const startApolloServer = async (
  apolloServer: ApolloServer,
  server: HttpsServer,
  app: any,
) => {
  // Start the ApolloServer
  apolloServer.start().then(() => {
    // Apply ApolloServer middleware to Express app
    apolloServer.applyMiddleware({ app, path: '/graphql', cors: false });

    // Start the server on the defined port
    server.listen(process.env.PORT, () => {
      // <-- Make sure to use 'server.listen', NOT 'app.listen'
      logger.info(`Server running on port ${process.env.PORT}`);
      const serverUrl = `https://localhost:${process.env.PORT}/graphql`;
      console.log('GraphQL API URL:', serverUrl);
      logger.info(`Server running on port ${process.env.PORT}`);
    });
  });
};

export default startApolloServer;
