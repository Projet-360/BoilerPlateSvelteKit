import { Router } from 'express';
import { isAuthenticated } from '../../middlewares/isAuthenticated.js';
import {
  sessionID,
  sessions,
} from '../../controllers/auth/sessionController.js';

const router = Router();

// GET /sessions
// Ce point de terminaison liste toutes les sessions actives de l'utilisateur, en s'assurant
// que l'utilisateur est authentifié avant de fournir l'information.
router.get('/getUserSessions', isAuthenticated, sessions);

// DELETE /sessions/:sessionId
// Ce point de terminaison permet à l'utilisateur de supprimer une session active spécifique, en s'assurant
// que l'utilisateur est authentifié.
router.delete('/closeUserSession/:sessionId', isAuthenticated, sessionID);

export default router;
