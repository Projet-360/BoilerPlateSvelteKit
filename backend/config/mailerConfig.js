import nodemailer from 'nodemailer';
import { env } from '../constants/env.js';

export const transporter = nodemailer.createTransport({
	service: env.MAIL_SERVER,
	auth: {
		user: env.EMAIL_USER,
		pass: env.EMAIL_PASSWORD
	},
	tls: {
		rejectUnauthorized: false // Ajoutez cette ligne
	}
});
