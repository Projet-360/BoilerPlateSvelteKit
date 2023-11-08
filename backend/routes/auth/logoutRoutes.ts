import { Router } from 'express';

// Initialize Express router
const router = Router();

import { logout } from '../../controllers/auth/logoutControllers.js';
// GET /logout
// Ce point de terminaison permet à un utilisateur de se déconnecter en nettoyant la session ou les cookies.
router.get('/logout', logout);

export default router;
