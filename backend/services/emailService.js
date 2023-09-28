import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const validateEnvVariables = () => {
	const requiredEnvVariables = [
		'MAIL_HOST',
		'MAIL_PORT',
		'EMAIL_USER',
		'EMAIL_PASSWORD',
		'URL_FRONT'
	];
	for (const varName of requiredEnvVariables) {
		if (!process.env[varName]) {
			throw new Error(`Veuillez définir la variable d'environnement ${varName}.`);
		}
	}
};

const createTransporter = () => {
	// Utilisez MailHog en environnement de développement
	if (process.env.NODE_ENV === 'development') {
		return nodemailer.createTransport({
			host: 'localhost',
			port: 1025,
			secure: false // MailHog utilise un serveur non sécurisé
		});
	}
	// Configuration normale pour les autres environnements
	return nodemailer.createTransport({
		host: process.env.MAIL_HOST,
		port: process.env.MAIL_PORT,
		auth: {
			user: process.env.EMAIL_USER,
			pass: process.env.EMAIL_PASSWORD
		}
	});
};

validateEnvVariables();

const transporter = createTransporter();

// Ajout d'une adresse e-mail d'expéditeur par défaut pour MailHog
const defaultSender =
	process.env.NODE_ENV === 'development' ? 'no-reply@dev.local' : 'no-reply@yourdomain.com';

export const sendVerificationEmail = async (email, token) => {
	const url = `${process.env.URL_FRONT}/verify/${token}`;
	await sendEmail(
		email,
		"Vérification de l'Email",
		`Cliquez <a href="${url}">ici</a> pour vérifier votre email.`,
		defaultSender
	);
};

export const sendResetPasswordEmail = async (user, resetToken) => {
	const url = `${process.env.URL_FRONT}/forgot-password/${resetToken}`;
	await sendEmail(
		user.email,
		'Réinitialisation du mot de passe',
		`Cliquez sur ce lien pour réinitialiser votre mot de passe <a href="${url}">ici</a>`,
		defaultSender
	);
};

const sendEmail = async (to, subject, html, from = defaultSender) => {
	try {
		await transporter.sendMail({ from, to, subject, html });
		console.log(`E-mail envoyé avec succès à ${to}`);
	} catch (error) {
		console.error(`Erreur lors de l'envoi de l'e-mail à ${to}:`, error);
		// Ici, vous pourriez ajouter un mécanisme pour gérer les erreurs de manière plus robuste.
	}
};
