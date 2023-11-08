import { Router } from 'express';

// Initialize Express router
const router = Router();

import { confirmDeleteToken } from '../../controllers/userControllers.js';

// POST /confirm-delete/:deleteToken
// Ce point de terminaison permet à l'utilisateur de confirmer la suppression de son compte en utilisant un token de suppression.
router.post('/confirm-delete/:deleteToken', confirmDeleteToken);

export default router;
