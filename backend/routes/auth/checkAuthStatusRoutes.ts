import { Router } from 'express';

// Initialize Express router
const router = Router();

import { CheckAuth } from '../../controllers/auth/CheckAuthController.js';

// GET /check-auth
// Ce point de terminaison vérifie si l'utilisateur est actuellement authentifié
// en utilisant le middleware CheckAuth pour contrôler l'état de l'authentification.
router.get('/checkAuth', CheckAuth);

export default router;
