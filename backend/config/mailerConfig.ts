import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

// Create a transporter for sending emails using Nodemailer
export const transporter = nodemailer.createTransport({
  service: process.env.MAIL_SERVER, // Email service provider (e.g., 'Gmail', 'Outlook', etc.)
  auth: {
    user: process.env.EMAIL_USER, // Sender's email address
    pass: process.env.EMAIL_PASSWORD, // Sender's email password or application-specific password
  },
  tls: {
    rejectUnauthorized: false, // Add this line to disable strict TLS certificate verification
  },
});
