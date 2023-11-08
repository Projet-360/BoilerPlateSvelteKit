import { Router } from 'express';
import { handleValidationErrors } from '../../middlewares/handleValidationErrors.js';
import { checkRole } from '../../middlewares/checkRole.js';
import { isAuthenticated } from '../../middlewares/isAuthenticated.js';
import {
  adminUser,
  adminUserID,
} from '../../controllers/auth/adminController.js';
import { updateUserValidators } from '../../validations/validators.js';
const router = Router();

/**
 * GET /admin/users
 * Endpoint to list all users for the admin, ensuring authentication and 'admin' role.
 */
router.get(
  '/admin/getAllUsers',
  isAuthenticated,
  checkRole('admin'),
  adminUser,
);

/**
 * PUT /admin/user/:_id
 * Endpoint for the admin to update specific user information, after verifying
 * authentication and 'admin' role.
 */
router.put(
  '/admin/updateUser/:_id',
  isAuthenticated,
  checkRole('admin'),
  [...updateUserValidators, handleValidationErrors],
  adminUserID,
);

export default router;
