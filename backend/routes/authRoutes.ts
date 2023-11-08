import { Router } from 'express';

// Initialize Express router
const router = Router();

import { handleValidationErrors } from '../middlewares/handleValidationErrors.js';

import { bruteForceRateLimiter } from '../services/rateLimiter.js';

import { signupValidators } from '../validations/validators.js';

import {
  login,
  logout,
  signup,
  verify,
} from '../controllers/authControllers.js';
import { confirmDeleteToken } from 'controllers/userControllers.js';

// GET /logout
// Ce point de terminaison permet à un utilisateur de se déconnecter en nettoyant la session ou les cookies.
router.get('/logout', logout);

// GET /verify/:token
// Ce point de terminaison permet de vérifier l'adresse email de l'utilisateur à l'aide d'un token spécifique.
router.get('/verify/:token', verify);

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

// POST /login
// Ce point de terminaison gère la connexion utilisateur avec un système de limitation de taux
// pour prévenir les attaques par force brute.
router.post('/login', bruteForceRateLimiter, login);

// POST /confirm-delete/:deleteToken
// Ce point de terminaison permet à l'utilisateur de confirmer la suppression de son compte en utilisant un token de suppression.
router.post('/confirm-delete/:deleteToken', confirmDeleteToken);

export default router;
