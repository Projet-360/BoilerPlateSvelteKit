import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
	host: process.env.MAIL_HOST,
	port: process.env.MAIL_PORT,
	auth: {
		user: process.env.EMAIL_USER,
		pass: process.env.EMAIL_PASSWORD
	}
});

if (
	!process.env.MAIL_HOST ||
	!process.env.MAIL_PORT ||
	!process.env.EMAIL_USER ||
	!process.env.EMAIL_PASSWORD ||
	!process.env.URL_FRONT
) {
	throw new Error("Veuillez définir toutes les variables d'environnement nécessaires.");
}

export const sendVerificationEmail = async (email, token) => {
	const url = `${process.env.URL_FRONT}/verify/${token}`;
	await sendEmail(
		email,
		"Vérification de l'Email",
		`Cliquez <a href="${url}">ici</a> pour vérifier votre email.`
	);
};

export const sendResetPasswordEmail = async (user, resetToken) => {
	const url = `${process.env.URL_FRONT}/forgot-password/${resetToken}`;
	await sendEmail(
		user.email,
		'Réinitialisation du mot de passe',
		`Cliquez sur ce lien pour réinitialiser votre mot de passe : ${url}`
	);
};

const sendEmail = async (to, subject, html) => {
	try {
		await transporter.sendMail({ to, subject, html });
		console.log(`E-mail envoyé avec succès à ${to}`);
	} catch (error) {
		console.error(`Erreur lors de l'envoi de l'e-mail à ${to}:`, error);
		// Ici, vous pourriez ajouter un mécanisme pour gérer les erreurs de manière plus robuste.
	}
};
