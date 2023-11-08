import { Router } from 'express';

// Initialize Express router
const router = Router();

import { handleValidationErrors } from '../../middlewares/handleValidationErrors.js';
import { bruteForceRateLimiter } from '../../services/rateLimiter.js';
import { signupValidators } from '../../validations/validators.js';
import { signup } from '../../controllers/auth/signupControllers.js';

// POST /signup
// Ce point de terminaison gère l'inscription d'un nouvel utilisateur. Il utilise une suite de middlewares pour
// limiter les tentatives répétées, valider les données d'entrée et gérer les erreurs de validation avant
// d'appeler la fonction signup pour créer le compte utilisateur.
router.post(
  '/signup',
  bruteForceRateLimiter,
  signupValidators,
  handleValidationErrors,
  signup,
);

export default router;
