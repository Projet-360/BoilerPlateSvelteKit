// Import required modules and configurations
import nodemailer from 'nodemailer';
import { env } from '../constants/env.js';

// Validate required environment variables
const validateEnvVariables = () => {
	const requiredEnvVariables = [
		'MAIL_HOST',
		'MAIL_PORT',
		'EMAIL_USER',
		'EMAIL_PASSWORD',
		'URL_FRONT'
	];
	for (const varName of requiredEnvVariables) {
		if (!env[varName]) {
			throw new Error(`Please set the environment variable ${varName}.`);
		}
	}
};

// Create a nodemailer transporter based on environment
const createTransporter = () => {
	if (env.NODE_ENV === 'development') {
		// Use MailHog in development environment
		return nodemailer.createTransport({
			host: 'localhost',
			port: 1025,
			secure: false // MailHog runs a non-secure server
		});
	}
	// Regular configuration for other environments
	return nodemailer.createTransport({
		host: env.MAIL_HOST,
		port: env.MAIL_PORT,
		auth: {
			user: env.EMAIL_USER,
			pass: env.EMAIL_PASSWORD
		}
	});
};

// Validate environment variables and create the transporter
validateEnvVariables();
const transporter = createTransporter();

// Default sender email address
const defaultSender =
	env.NODE_ENV === 'development' ? 'no-reply@dev.local' : 'no-reply@yourdomain.com';

// Function to send email verification link
export const sendVerificationEmail = async (email, token) => {
	const url = `${env.URL_FRONT}/signup/${token}`;
	await sendEmail(
		email,
		"Vérification de l'Email",
		`Cliquez <a href="${url}">ici</a> pour vérifier votre email.`,
		defaultSender
	);
};

// Function to send reset password link
export const sendResetPasswordEmail = async (user, resetToken) => {
	const url = `${env.URL_FRONT}/forgot-password/${resetToken}`;
	await sendEmail(
		user.email,
		'Réinitialisation du mot de passe',
		`Cliquez sur ce lien pour réinitialiser votre mot de passe <a href="${url}">ici</a>`,
		defaultSender
	);
};

// Function to send email using the transporter
const sendEmail = async (to, subject, html, from = defaultSender) => {
	try {
		await transporter.sendMail({ from, to, subject, html });
		console.log(`Email successfully sent to ${to}`);
	} catch (error) {
		console.error(`Error while sending email to ${to}:`, error);
		// Here, you could add more robust error handling.
	}
};
