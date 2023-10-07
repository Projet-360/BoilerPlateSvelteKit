// Import required modules and middleware
import { Router } from 'express';

// Initialize Express router
const router = Router();

import pkg from 'bcryptjs';
const { hash, compare } = pkg;
import { check, validationResult } from 'express-validator';

import { handleValidationErrors } from '../middlewares/handleValidationErrors.js';
import { isAuthenticated } from '../middlewares/isAuthenticated.js';
import { checkRole } from '../middlewares/checkRole.js';

import { HTTP_STATUS } from '../constants/HTTP_STATUS.js';

import User from '../models/UserModel.js';
import BlacklistedToken from '../models/BlacklistedTokenModel.js';

import * as authService from '../services/authService.js';
import logger from '../services/logger.js';
import { rateLimiter } from '../services/rateLimiter.js';

import { signupValidators } from '../validations/signupValidators.js';
import { validateEmail } from '../validations/signupValidators.js';

import CustomError from '../errors/CustomError.js';

// Endpoint to check authentication status
router.get('/check-auth', async (req, res, next) => {
	const token = req.cookies.token;

	try {
		const result = await authService.checkAuthentication(token);
		if (result.isAuthenticated) {
			res.status(HTTP_STATUS.OK).json({
				isAuthenticated: true,
				token: result.token,
				role: result.role,
				userId: result.userId
			});
		} else {
			if (result.message) {
				res.status(HTTP_STATUS.UNAUTHORIZED).json({
					isAuthenticated: false,
					message: result.message
				});
			} else {
				res.status(HTTP_STATUS.OK).json({ isAuthenticated: false });
			}
		}
	} catch (error) {
		next(new CustomError('CheckAuthError', error.message, 400));
	}
});

// Endpoint to handle user logout
router.get('/logout', async (req, res, next) => {
	try {
		const token = req.cookies.token;
		const newBlacklistedToken = new BlacklistedToken({ token });
		await newBlacklistedToken.save();

		res.clearCookie('token');
		res.status(200).json({ message: 'Déconnexion réussie' });
	} catch (error) {
		next(new CustomError('LogoutError', error.message, 400));
	}
});

// Endpoint to verify email
router.get('/verify/:token', async (req, res) => {
	try {
		const { token } = req.params;

		const message = await authService.verifyToken(token);

		res.status(200).json({ message });
	} catch (error) {
		console.error("Erreur lors de la vérification de l'e-mail:", error);
		res.status(500).json({ message: error.message });
	}
});

// Endpoint for user signup
router.post('/signup', [signupValidators, handleValidationErrors], async (req, res, next) => {
	try {
		const { username, email, password } = req.body;
		await authService.checkEmailExists(email);
		const hashedPassword = await authService.hashPassword(password);
		const role = 'user';
		const newUser = await authService.createUser(username, email, hashedPassword, role);
		await authService.createSignupToken(newUser, role);
		await authService.createVerificationToken(newUser);

		res.status(HTTP_STATUS.CREATED).json({ message: 'Success', success: true });
	} catch (error) {
		console.log(error);
		next(new CustomError('SignupError', error.message, 400));
	}
});

// Endpoint for user login with rate limiter
router.post('/login', rateLimiter, async (req, res, next) => {
	try {
		const { email, password } = req.body;
		const { token, userId, role } = await authService.login(email, password);
		// Définir le cookie
		authService.setAuthCookie(res, token);

		res.status(HTTP_STATUS.OK).json({ token, userId, role });
	} catch (error) {
		console.log('error from authRoutes', error);
		next(new CustomError('LoginError', error.message, 400));
	}
});

// Endpoint to request password reset
router.post(
	'/forgot-password',
	validateEmail,
	handleValidationErrors,
	rateLimiter,
	async (req, res, next) => {
		try {
			const { email } = req.body;
			const user = await User.findOne({ email });

			if (!user) {
				return next(new CustomError('USER_NOT_FOUND', 'USER_NOT_FOUND', 404));
			}

			if (!user.isVerified) {
				return next(new CustomError('EMAIL_NOT_VERIFIED', 'EMAIL_NOT_VERIFIED', 404));
			}

			await authService.requestForgotPassword(user);
			res.status(HTTP_STATUS.OK).json({ message: 'Success', success: true });
		} catch (error) {
			logger.error('Erreur lors de la réinitialisation du mot de passe:', error);
			next(new CustomError('ResetPasswordError', error.message, 500));
		}
	}
);

// Endpoint to reset password using a token
router.post('/forgot-password/:token', async (req, res) => {
	const { token } = req.params;
	const { newPassword } = req.body;

	// Trouver l'utilisateur avec le token de réinitialisation
	const user = await User.findOne({
		resetToken: token,
		resetTokenExpiration: { $gt: Date.now() }
	});

	if (!user) {
		return res.status(400).json({ error: 'Token invalide ou expiré' });
	}

	const ll = await authService.requestresetForgotPassword(user, newPassword);

	res.status(HTTP_STATUS.OK).json({ message: 'Success', success: true });
});

// User dashboard accessible only for authenticated users with 'user' role
router.get('/user/dashboard', isAuthenticated, checkRole('user'), async (req, res) => {
	const { userId } = req.user;
	try {
		const userInfo = await authService.getUserInfo(userId);
		res.json({ userInfo });
	} catch (err) {
		console.error(err);
		res.status(500).json({ message: err.message });
	}
});

// Export the router
export default router;
