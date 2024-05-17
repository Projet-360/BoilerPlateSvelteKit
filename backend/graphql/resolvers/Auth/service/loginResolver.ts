import { Request, Response } from 'express';
import * as authService from '../../../../services/authService.js';
import { Session } from '../../../../models/sessionModel.js';
import CustomError from '../../../../services/errors/CustomError.js';

const loginResolver = async (
  email: string,
  password: string,
  fingerPrint: any,
  res: Response,
) => {
  try {
    const loginResult = await authService.login(email, password);

    if (!loginResult) {
      throw new CustomError('LoginFailed', 'Login failed', 400);
    }

    const { token, _id, role } = loginResult;
    authService.setAuthCookie(res, process.env.TOKEN_NAME as string, token);

    const userData = await authService.getUserInfo(_id);

    const sessionData = {
      userId: _id.toString(),
      ...fingerPrint,
    };

    // Vérifier si une session avec les mêmes données existe déjà
    const existingSession = await Session.findOne({
      userId: sessionData.userId,
      userAgent: sessionData.userAgent,
      screenResolution: sessionData.screenResolution,
      timezone: sessionData.timezone,
      webglVendor: sessionData.webglVendor,
      webglRenderer: sessionData.webglRenderer,
      canvasFingerprint: sessionData.canvasFingerprint,
    });

    let sessionId;
    if (existingSession) {
      // Utiliser l'ID de la session existante
      sessionId = existingSession._id.toString();
    } else {
      // Créer et enregistrer une nouvelle session si elle n'existe pas déjà
      const session = new Session(sessionData);
      await session.save();
      sessionId = session._id.toString();
    }

    console.log('Session ID:', sessionId);

    return {
      role: role,
    };
  } catch (error: any) {
    throw new CustomError('LoginError', error.message, 400);
  }
};
export default loginResolver;
