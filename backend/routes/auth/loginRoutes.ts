import { Router } from 'express';

// Initialize Express router
const router = Router();

import { bruteForceRateLimiter } from '../../services/rateLimiter.js';

import { login } from '../../controllers/authControllers.js';

// POST /login
// Ce point de terminaison gère la connexion utilisateur avec un système de limitation de taux
// pour prévenir les attaques par force brute.
router.post('/login', bruteForceRateLimiter, login);

export default router;
