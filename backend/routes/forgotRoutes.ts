import { Router } from 'express';
import { handleValidationErrors } from '../middlewares/handleValidationErrors.js';
import { emailValidators } from '../validations/validators.js';
import { rateLimiter } from '../services/rateLimiter.js';
import {
  forgotPassword,
  forgotPasswordToken,
} from '../controllers/autControllers.js';
const router = Router();

// POST /forgot-password
// Ce point de terminaison initie le processus de réinitialisation du mot de passe en vérifiant l'email de l'utilisateur
// et en utilisant un système de limitation de taux pour prévenir les abus.
router.post(
  '/forgot-password',
  emailValidators,
  handleValidationErrors,
  rateLimiter,
  forgotPassword,
);

// POST /forgot-password/:token
// Ce point de terminaison permet à l'utilisateur de réinitialiser son mot de passe en utilisant un token
// qui a été envoyé à son adresse email.
router.post('/forgot-password/:token', forgotPasswordToken);

export default router;
