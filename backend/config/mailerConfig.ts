import nodemailer from 'nodemailer';
import { env } from '../constants/env.js';

// Create a transporter for sending emails using Nodemailer
export const transporter = nodemailer.createTransport({
	service: env.MAIL_SERVER, // Email service provider (e.g., 'Gmail', 'Outlook', etc.)
	auth: {
		user: env.EMAIL_USER, // Sender's email address
		pass: env.EMAIL_PASSWORD // Sender's email password or application-specific password
	},
	tls: {
		rejectUnauthorized: false // Add this line to disable strict TLS certificate verification
	}
});
