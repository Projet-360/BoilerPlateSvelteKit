import pkg from 'bcryptjs';
const { hash, compare } = pkg;
import jwt from 'jsonwebtoken';
import crypto from 'crypto';

import config from '../config/config.js';
import { HTTP_STATUS } from '../constants/HTTP_STATUS.js';

import User from '../models/UserModel.js';
import EmailVerificationToken from '../models/EmailVerificationTokenModel.js';
import BlacklistedToken from '../models/BlacklistedTokenModel.js';

import CustomError from '../errors/CustomError.js';

import { sendVerificationEmail, sendResetPasswordEmail } from '../services/emailService.js';

// Fonction pour générer un token de vérification
const generateToken = () => {
	return crypto.randomBytes(32).toString('hex');
};

const throwError = (type, message, status) => {
	throw new CustomError(type, message, status);
};

const generateAndSaveResetToken = async (user) => {
	const resetToken = generateToken();
	user.resetToken = resetToken;
	user.resetTokenExpiration = Date.now() + 3600000;
	await user.save();
	await sendResetPasswordEmail(user, resetToken);
};

export const createSignupToken = ({ _id: userId, username, email, role }) => {
	const token = jwt.sign({ userId, username, email, role }, config.SECRETKEY, {
		expiresIn: config.TOKEN_EXPIRY
	});
	return { token };
};

export const createVerificationToken = async (user) => {
	const verificationToken = generateToken();
	await sendVerificationEmail(user.email, verificationToken);

	const expireAt = new Date();
	expireAt.setHours(expireAt.getHours() + config.VERIFICATION_EXPIRY_HOURS);

	const newToken = new EmailVerificationToken({
		userId: user._id,
		token: verificationToken,
		expireAt: expireAt
	});
	await newToken.save();

	return { verificationToken };
};

export const hashPassword = async (password) => {
	return await hash(password, 12);
};

export const checkEmailExists = async (email) => {
	const existingUserByEmail = await User.findOne({ email });
	if (existingUserByEmail) {
		throwError('EMAIL_EXIST', 'EMAIL_EXIST', HTTP_STATUS.BAD_REQUEST);
	}
};

export const createUser = async (username, email, hashedPassword, role) => {
	const newUser = new User({ username, email, password: hashedPassword, role });
	console.log('New User:', newUser);
	await newUser.save();
	return newUser;
};

export const checkAuthentication = async (token) => {
	if (!token) {
		console.log("Le client n'est pas connecté");
		return { isAuthenticated: false };
	}

	const blacklistedToken = await BlacklistedToken.findOne({ token });

	if (blacklistedToken) {
		return {
			isAuthenticated: false,
			message: 'Le token est dans la liste noire.'
		};
	}

	const decoded = jwt.verify(token, config.SECRETKEY);

	// Chercher l'utilisateur en fonction de userId pour obtenir le rôle
	const user = await User.findById(decoded.userId);

	if (!user) {
		return {
			isAuthenticated: false,
			message: 'Utilisateur non trouvé.'
		};
	}

	return {
		isAuthenticated: true,
		token,
		userId: decoded.userId,
		role: user.role // Ajout du rôle ici
	};
};

export const signup = async (email) => {
	try {
		const tokenExpiry = config.TOKEN_EXPIRY;

		const token = jwt.sign(
			{ userId: newUser._id, username: newUser.username, email: newUser.email, role: newUser.role },
			config.SECRETKEY,
			{ expiresIn: tokenExpiry }
		);

		// Générer le token de vérification
		const verificationToken = generateToken();
		await sendVerificationEmail(email, verificationToken);

		// Définir la date d'expiration du token de vérification
		const expireAt = new Date();
		expireAt.setHours(expireAt.getHours() + 24); // Le token expirera dans 24 heures

		// Créer un nouvel objet EmailVerificationToken
		const newToken = new EmailVerificationToken({
			userId: newUser._id,
			token: verificationToken,
			expireAt: expireAt
		});
		await newToken.save();

		return { userId: newUser._id };
	} catch (error) {
		throwError('SignupError', error.message);
	}
};

export const login = async (email, password) => {
	// Trouver l'utilisateur par email
	const user = await User.findOne({ email });
	if (!user) {
		// Vous pouvez ajouter des logs ici
		throwError('INVALID_CREDENTIALS', 'INVALID_CREDENTIALS');
	}

	if (!user.isVerified) {
		throwError('EMAIL_NOT_VERIFIED', 'EMAIL_NOT_VERIFIED');
	}

	// Vérifier si le mot de passe correspond
	const isMatch = await compare(password, user.password);
	if (!isMatch) {
		// Vous pouvez ajouter des logs ici
		throwError('INVALID_CREDENTIALS', 'INVALID_CREDENTIALS');
	}

	// Vérification supplémentaire: est-ce que l'email a été vérifié, etc.
	// ...

	// Générer un JWT
	const token = jwt.sign(
		{ userId: user._id, email: user.email, role: user.role },
		config.SECRETKEY,
		{
			expiresIn: '1h'
		}
	);

	return { token, userId: user._id, role: user.role };
};

export const verifyToken = async (token) => {
	// Trouver le token dans la base de données
	const verificationToken = await EmailVerificationToken.findOne({ token });

	if (!verificationToken) {
		throwError('INVALID_TOKEN');
	}

	// Vérifier si le token a expiré
	if (new Date() > verificationToken.expireAt) {
		throwError('EXPIRED_TOKEN');
	}

	// Trouver l'utilisateur associé à ce token
	const user = await User.findById(verificationToken.userId);

	if (!user) {
		throwError('USER_NOT_FIND');
	}

	// Mettre à jour le statut de vérification de l'utilisateur
	user.isVerified = true;
	await user.save();

	// Supprimer le token de vérification car il a été utilisé
	await EmailVerificationToken.findByIdAndDelete(verificationToken.id);

	return 'E-mail vérifié avec succès !';
};

export const requestForgotPassword = async (user) => {
	await generateAndSaveResetToken(user);
	return { message: 'EMAIL_FORGOT_PASSWORD' };
};

export const requestresetForgotPassword = async (user, newPassword) => {
	const hashedPassword = await hash(newPassword, 12);
	user.password = hashedPassword;
	user.resetToken = undefined;
	user.resetTokenExpiration = undefined;
	await user.save();
};
