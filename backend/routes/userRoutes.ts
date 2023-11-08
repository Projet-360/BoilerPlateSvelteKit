import { Router } from 'express';
import { handleValidationErrors } from '../middlewares/handleValidationErrors.js';
import { checkRole } from '../middlewares/checkRole.js';
import { isAuthenticated } from '../middlewares/isAuthenticated.js';
import { updateUserValidators } from '../validations/validators.js';

import {
  user,
  userRequestDelete,
  userUpdate,
} from '../controllers/userControllers.js';

const router = Router();

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

export default router;
