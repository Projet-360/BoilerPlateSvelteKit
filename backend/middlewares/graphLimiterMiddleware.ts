import { Request, Response, NextFunction } from 'express';
import logger from '../services/logger.js';

// Middleware pour enregistrer le nom des opérations GraphQL et d'autres détails
export const graphLimiterMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const operationName = req.body?.operationName || 'Unknown Operation';
  const ipAddress =
    req.ip || req.headers['x-forwarded-for'] || req.socket.remoteAddress;

  // Enregistrer le nom de l'opération et l'adresse IP
  logger.info(
    `Received GraphQL operation: ${operationName} from IP: ${ipAddress}`,
  );

  // Vous pouvez également loguer les variables si nécessaire
  if (req.body?.variables) {
    logger.debug(`Variables: ${JSON.stringify(req.body.variables)}`);
  }

  next();
};
