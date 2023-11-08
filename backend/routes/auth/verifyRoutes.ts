import { Router } from 'express';

// Initialize Express router
const router = Router();

import { verify } from '../../controllers/auth/verifyController.js';

// GET /verify/:token
// Ce point de terminaison permet de vérifier l'adresse email de l'utilisateur à l'aide d'un token spécifique.
router.get('/verify/:token', verify);

export default router;
