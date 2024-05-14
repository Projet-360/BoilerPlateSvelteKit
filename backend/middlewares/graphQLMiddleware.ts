import { Request, Response, NextFunction } from 'express';
import logger from '../services/logger.js';
import { validationResult } from 'express-validator';
import {
  greetingsValidators,
  resetForgotNewPassword,
  signupValidators,
} from './validations/validators.js';

// Middleware pour enregistrer les détails des opérations GraphQL sur toutes les routes pertinentes
export const graphQLMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  // Vérifier la présence de l'opération GraphQL dans le corps de la requête
  if (!req.body || !req.body.operationName) {
    logger.error('GraphQL request without operationName received');
    return res
      .status(400)
      .json({ message: 'Bad Request: Missing operationName' });
  }

  const operationName = req.body.operationName;
  const ipAddress =
    req.ip || req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const method = req.method;
  const url = req.originalUrl;

  // Journaliser les détails de base de l'opération
  logger.info(
    `GraphQL Request - Method: ${method}, URL: ${url}, Operation: ${operationName}, IP: ${ipAddress}`,
  );

  // Loguer les variables de la requête, tout en assurant qu'aucune donnée sensible n'est exposée
  if (req.body.variables) {
    const safeVariables = sanitizeVariables(req.body.variables);
    logger.debug(`Variables: ${JSON.stringify(safeVariables)}`);
  }

  let validators;
  switch (operationName) {
    case 'CreateGreeting':
      validators = greetingsValidators;
      break;
    case 'UpdateGreeting':
      validators = greetingsValidators;
      break;
    case 'Signup':
      validators = signupValidators;
      break;
    case 'ResetForgotNewPassword':
      validators = resetForgotNewPassword;
      break;
    default:
      return next();
  }

  // Exécuter les validateurs et vérifier les résultats
  Promise.all(validators.map((validation) => validation.run(req)))
    .then(() => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        console.log('Validation errors:', errors.array());
        console.log('Received body for error logging:', req.body);
        return res.status(400).json({ errors: errors.array() });
      } else {
        next();
      }
    })
    .catch(next); // Capture des erreurs des validateurs et passe au middleware d'erreurs
};

// Fonction pour masquer ou exclure les variables sensibles avant de les journaliser
function sanitizeVariables(
  variables: Record<string, any>,
): Record<string, any> {
  const safeVariables = { ...variables };
  // Exemple : Masquer le mot de passe ou d'autres champs sensibles
  if (safeVariables.password) {
    safeVariables.password = '******';
  }
  return safeVariables;
}
