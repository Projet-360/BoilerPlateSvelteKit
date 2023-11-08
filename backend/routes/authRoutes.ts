import { Router } from 'express';

// Initialize Express router
const router = Router();

import { handleValidationErrors } from '../middlewares/handleValidationErrors.js';
import { isAuthenticated } from '../middlewares/isAuthenticated.js';
import { checkRole } from '../middlewares/checkRole.js';

import { bruteForceRateLimiter, rateLimiter } from '../services/rateLimiter.js';

import {
  signupValidators,
  updateUserValidators,
  emailValidators,
} from '../validations/validators.js';

import {
  adminUser,
  adminUserID,
  checkAuthStatus,
  confirmDeleteToken,
  forgotPassword,
  forgotPasswordToken,
  login,
  logout,
  sessionID,
  sessions,
  signup,
  user,
  userRequestDelete,
  userUpdate,
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

// GET /sessions
// Ce point de terminaison liste toutes les sessions actives de l'utilisateur, en s'assurant
// que l'utilisateur est authentifié avant de fournir l'information.
router.get('/sessions', isAuthenticated, sessions);

// DELETE /sessions/:sessionId
// Ce point de terminaison permet à l'utilisateur de supprimer une session active spécifique, en s'assurant
// que l'utilisateur est authentifié.
router.delete('/sessions/:sessionId', isAuthenticated, sessionID);

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

// GET /user
// Ce point de terminaison est le tableau de bord de l'utilisateur, accessible seulement si l'utilisateur est authentifié
// et a le rôle 'user'.
router.get('/user', isAuthenticated, checkRole('user'), user);

// PUT /user/update
// Ce point de terminaison permet à l'utilisateur de mettre à jour ses informations personnelles, après avoir vérifié
// son authentification et son rôle.
router.put(
  '/user/update',
  isAuthenticated,
  checkRole('user'),
  [...updateUserValidators, handleValidationErrors],
  userUpdate,
);

// POST /user/request-delete
// Ce point de terminaison permet à l'utilisateur de demander la suppression de son compte, en vérifiant
// son authentification et son rôle avant de procéder.
router.post(
  '/user/request-delete',
  isAuthenticated,
  checkRole('user'),
  userRequestDelete,
);

// POST /confirm-delete/:deleteToken
// Ce point de terminaison permet à l'utilisateur de confirmer la suppression de son compte en utilisant un token de suppression.
router.post('/confirm-delete/:deleteToken', confirmDeleteToken);

// GET /admin/users
// Ce point de terminaison permet à l'administrateur de lister tous les utilisateurs, en vérifiant
// son authentification et son rôle 'admin'.
router.get('/admin/users', isAuthenticated, checkRole('admin'), adminUser);

// PUT /admin/user/:_id
// Ce point de terminaison permet à l'administrateur de mettre à jour les informations d'un utilisateur spécifique,
// en vérifiant d'abord son authentification et son rôle 'admin'.
router.put(
  '/admin/user/:_id',
  isAuthenticated,
  checkRole('admin'),
  [...updateUserValidators, handleValidationErrors],
  adminUserID,
);

export default router;
