import { Router } from 'express';

// Initialize Express router
const router = Router();

import { handleValidationErrors } from '../middlewares/handleValidationErrors.js';

import { bruteForceRateLimiter, rateLimiter } from '../services/rateLimiter.js';

import {
  signupValidators,
  emailValidators,
} from '../validations/validators.js';

import {
  checkAuthStatus,
  confirmDeleteToken,
  forgotPassword,
  forgotPasswordToken,
  login,
  logout,
  signup,
  verify,
} from '../controllers/autControllers.js';

// GET /check-auth
// Ce point de terminaison vérifie si l'utilisateur est actuellement authentifié
// en utilisant le middleware checkAuthStatus pour contrôler l'état de l'authentification.
router.get('/check-auth', checkAuthStatus);

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

// POST /confirm-delete/:deleteToken
// Ce point de terminaison permet à l'utilisateur de confirmer la suppression de son compte en utilisant un token de suppression.
router.post('/confirm-delete/:deleteToken', confirmDeleteToken);

export default router;
