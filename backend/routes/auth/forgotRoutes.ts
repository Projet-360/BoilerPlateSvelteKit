import { Router } from 'express';
import { handleValidationErrors } from '../../middlewares/handleValidationErrors.js';
import { emailValidators } from '../../validations/validators.js';
import { rateLimiter } from '../../services/rateLimiter.js';
import {
  forgotPassword,
  forgotPasswordToken,
} from '../../controllers/auth/forgotController.js';

const router = Router();

// POST /sendEmailResetPassword
// Ce point de terminaison initie le processus de réinitialisation du mot de passe en vérifiant l'email de l'utilisateur
// et en utilisant un système de limitation de taux pour prévenir les abus.
router.post(
  '/sendEmailResetPassword',
  emailValidators,
  handleValidationErrors,
  rateLimiter,
  forgotPassword,
);

// POST /ResetForgotNewPassword/:token
// Ce point de terminaison permet à l'utilisateur de réinitialiser son mot de passe en utilisant un token
// qui a été envoyé à son adresse email.
router.post('/ResetForgotNewPassword/:token', forgotPasswordToken);

export default router;
