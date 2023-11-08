import { Router } from 'express';

// Initialize Express router
const router = Router();

import { checkAuthStatus } from '../controllers/checkAuthStatusController.js';

// GET /check-auth
// Ce point de terminaison vérifie si l'utilisateur est actuellement authentifié
// en utilisant le middleware checkAuthStatus pour contrôler l'état de l'authentification.
router.get('/check-auth', checkAuthStatus);

export default router;
