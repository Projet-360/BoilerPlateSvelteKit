// Import required modules and configurations
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { IUser } from './../TypeScript/interfaces.js';
import logger from './logger.js';

import path from 'path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const envPath = path.resolve(__dirname, './../.env');
dotenv.config({ path: envPath });

// Validate required environment variables
const validateEnvVariables = () => {
  const requiredEnvVariables = [
    'MAIL_HOST',
    'MAIL_PORT',
    'EMAIL_USER',
    'EMAIL_PASSWORD',
    'URL_FRONT_LOCAL',
  ];
  for (const varName of requiredEnvVariables) {
    if (!process.env[varName]) {
      // Ajout du '!' pour vérifier si la variable n'est PAS définie
      throw new Error(`Please set the environment variable ${varName}.`);
    }
  }
};

// Create a nodemailer transporter based on environment
const createTransporter = () => {
  validateEnvVariables(); // Call the validation function

  if (process.env.NODE_ENV === 'dev') {
    return nodemailer.createTransport({
      host: 'localhost',
      port: 1025,
      secure: false, // MailHog runs a non-secure server
    });
  }

  // Use non-null assertion for process.env variables.
  // Make sure you validate these variables before using them like this.
  return nodemailer.createTransport({
    host: process.env.MAIL_HOST!,
    port: Number(process.env.MAIL_PORT!), // Convert string to number
    auth: {
      user: process.env.EMAIL_USER!,
      pass: process.env.EMAIL_PASSWORD!,
    },
  });
};

// Validate environment variables and create the transporter
validateEnvVariables();
const transporter = createTransporter();

// Default sender email address
const defaultSender =
  process.env.NODE_ENV === 'dev'
    ? 'no-reply@dev.local'
    : 'no-reply@yourdomain.com';

/**
 * Send an email verification link to the user.
 *
 * @async
 * @param {string} email - The email address to send the verification link to.
 * @param {string} token - The verification token to include in the email.
 * @throws Will throw an error if the email sending fails.
 */
export const sendVerificationEmail = async (email: string, token: string) => {
  const url = `${process.env.URL_FRONT_LOCAL}/signup/${token}`;
  await sendEmail(
    email,
    "Vérification de l'Email",
    `Cliquez <a href="${url}">ici</a> pour vérifier votre email.`,
    defaultSender,
  );
};

/**
 * Send a password reset link via email.
 *
 * @async
 * @param {IUser} user - The user IUser containing at least the email address.
 * @param {string} resetToken - The reset password token.
 * @throws Will throw an error if the email sending fails.
 */
export const sendResetPasswordEmail = async (
  user: IUser,
  resetToken: string,
) => {
  const url = `${process.env.URL_FRONT_LOCAL}/forgot-password/${resetToken}`;
  await sendEmail(
    user.email,
    'Réinitialisation du mot de passe',
    `Cliquez sur ce lien pour réinitialiser votre mot de passe <a href="${url}">ici</a>`,
    defaultSender,
  );
};

/**
 * Send an email using a predefined transporter.
 *
 * @async
 * @param {string} to - The recipient email address.
 * @param {string} subject - The email subject.
 * @param {string} html - The email content in HTML format.
 * @param {string} [from=defaultSender] - The sender's email address.
 * @throws Will throw an error if the email sending fails.
 */
const sendEmail = async (
  to: string,
  subject: string,
  html: string,
  from: string = defaultSender,
) => {
  try {
    await transporter.sendMail({ from, to, subject, html });
    logger.info(`Email successfully sent to ${to}`);
  } catch (error) {
    console.error(`Error while sending email to ${to}:`, error);
    // Here, you could add more robust error handling.
  }
};
