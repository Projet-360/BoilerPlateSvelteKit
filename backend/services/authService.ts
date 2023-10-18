// Import required modules and configurations
import { Response, CookieOptions } from 'express';
import pkg from 'bcryptjs';
const { hash, compare } = pkg;
import jwt, { JwtPayload } from 'jsonwebtoken';
import crypto from 'crypto';

import { env } from '../constants/env.js';
import config from '../config/config.js';
import { HTTP_STATUS } from '../constants/HTTP_STATUS.js';

import User from '../models/UserModel.js';
import EmailVerificationToken from '../models/EmailVerificationTokenModel.js';
import BlacklistedToken from '../models/BlacklistedTokenModel.js';

import CustomError from './../errors/CustomError.js';

import {
  sendVerificationEmail,
  sendResetPasswordEmail,
} from './emailService.js';

import { IUser } from '../TypeScript/interfaces.js';

// Function to generate a random token
const generateToken = () => {
  return crypto.randomBytes(32).toString('hex');
};

// Function to throw custom errors
const throwError = (type: string, message: string, status: number) => {
  throw new CustomError(type, message, status);
};

// Generate and save reset password token, then send the email
const generateAndSaveResetToken = async (user: IUser) => {
  const resetToken = generateToken();
  user.resetToken = resetToken;
  user.resetTokenExpiration = new Date(Date.now() + 3600000);
  await user.save();
  await sendResetPasswordEmail(user, resetToken);
};

/**
 * Create a JWT token after user signup.
 *
 * @param {Object} user - The user object.
 * @param {string} user._id - The user's unique identifier.
 * @param {string} user.username - The user's username.
 * @param {string} user.email - The user's email.
 * @param {string} user.role - The user's role.
 *
 * @returns {Object} - An object containing the JWT token.
 */
export const createSignupToken = (user: IUser) => {
  const { _id: userId, username, email, role } = user;
  const token = jwt.sign({ userId, username, email, role }, config.SECRETKEY, {
    expiresIn: config.TOKEN_EXPIRY,
  });
  return { token };
};

/**
 * Create and save an email verification token.
 *
 * @param {Object} user - The user object.
 * @param {string} user._id - The user's unique identifier.
 * @param {string} user.email - The user's email.
 *
 * @returns {Promise<Object>} - A promise that resolves with an object containing the verification token.
 */
export const createVerificationToken = async (user: IUser) => {
  const verificationToken = generateToken();
  await sendVerificationEmail(user.email, verificationToken);

  const expireAt = new Date();
  expireAt.setHours(expireAt.getHours() + config.VERIFICATION_EXPIRY_HOURS);

  const newToken = new EmailVerificationToken({
    userId: user._id,
    token: verificationToken,
    expireAt: expireAt,
  });
  await newToken.save();

  return { verificationToken };
};

/**
 * Hash a given password.
 *
 * @param {string} password - The password to hash.
 *
 * @returns {Promise<string>} - A promise that resolves with the hashed password.
 */
export const hashPassword = async (password: string) => {
  return await hash(password, 12);
};

/**
 * Check if the given email already exists in the database.
 *
 * @async
 * @param {string} email - The email address to check for.!
 * @throws Will throw an error if the email address already exists in the database.
 * @returns {Promise<void>} - A promise that resolves if the email does not exist, otherwise it throws an error.
 */
export const checkEmailExists = async (email: string) => {
  const existingUserByEmail = await User.findOne({ email });
  if (existingUserByEmail) {
    throwError('EMAIL_EXIST', 'EMAIL_EXIST', HTTP_STATUS.BAD_REQUEST);
  }
};

/**
 * Create a new user in the database.
 *
 * @async
 * @param {string} username - The username of the new user.
 * @param {string} email - The email address of the new user.
 * @param {string} hashedPassword - The hashed password of the new user.
 * @param {string} role - The role assigned to the new user.
 *
 * @returns {Promise<Object>} - A promise that resolves with the newly created user object.
 */
export const createUser = async (
  username: string,
  email: string,
  hashedPassword: string,
  role: string,
) => {
  const newUser = new User({ username, email, password: hashedPassword, role });
  console.log('New User:', newUser);
  await newUser.save();
  return newUser;
};

/**
 * Check if the user is authenticated based on the provided token.
 *
 * @async
 * @param {string} token - The JWT token to verify.
 *
 * @returns {Promise<Object>} - A promise that resolves with an object containing the authentication status and other details.
 *
 * The object has the following structure:
 * - isAuthenticated: {boolean} Indicates whether the user is authenticated.
 * - message: {string} [Optional] A message explaining why the authentication failed.
 * - token: {string} [Optional] The provided JWT token.
 * - userId: {string} [Optional] The user's ID.
 * - role: {string} [Optional] The user's role.
 */
export const checkAuthentication = async (token: string) => {
  if (!token) {
    console.log("Le client n'est pas connecté");
    return { isAuthenticated: false };
  }

  const blacklistedToken = await BlacklistedToken.findOne({ token });

  if (blacklistedToken) {
    return {
      isAuthenticated: false,
      message: 'Le token est dans la liste noire.',
    };
  }

  const decoded = jwt.verify(token, config.SECRETKEY) as JwtPayload;

  // Chercher l'utilisateur en fonction de userId pour obtenir le rôle
  const user = await User.findById(decoded.userId);

  if (!user) {
    return {
      isAuthenticated: false,
      message: 'Utilisateur non trouvé.',
    };
  }

  return {
    isAuthenticated: true,
    token,
    userId: decoded.userId,
    role: user.role, // Ajout du rôle ici
  };
};

/**
 * Handles the login process for an existing user.
 *
 * @param email - The email address of the user.
 * @param password - The password of the user.
 * @returns An object containing the JWT token, user ID, and role.
 * @throws Throws an error if any step of the login process fails.
 */
export const login = async (email: string, password: string) => {
  // Find the user by email
  const user: IUser | null = await User.findOne({ email });

  // Handle error cases first
  if (!user) {
    throwError('INVALID_CREDENTIALS', 'INVALID_CREDENTIALS', 401);
    return;
  }

  if (!user.isVerified) {
    throwError('EMAIL_NOT_VERIFIED', 'EMAIL_NOT_VERIFIED', 401);
    return;
  }

  // At this point, we know user is not null and is verified
  const isMatch = await compare(password, user.password);
  if (!isMatch) {
    throwError('INVALID_CREDENTIALS', 'INVALID_CREDENTIALS', 401);
    return;
  }

  // Continue with the rest of your code...
  const token = jwt.sign(
    { userId: user._id, email: user.email, role: user.role },
    config.SECRETKEY,
    {
      expiresIn: '1h',
    },
  );

  return { token, userId: user._id, role: user.role };
};

/**
 * Verify the email verification token.
 *
 * @async
 * @param {string} token - The email verification token.
 *
 * @returns {Promise<string>} - A promise that resolves to a string indicating the result of the verification.
 *
 * @throws Will throw an error for the following scenarios:
 * - Token is not found in the database ('INVALID_TOKEN').
 * - Token has expired ('EXPIRED_TOKEN').
 * - Associated user is not found ('USER_NOT_FIND').
 */
/**
 * Verifies a given email verification token.
 *
 * @param token - The email verification token.
 * @returns 'success' if the token is valid.
 * @throws Will throw an error if the token is invalid or expired, or if the user is not found.
 */
export const verifyToken = async (token: string) => {
  // Find the token in the database
  const verificationToken = await EmailVerificationToken.findOne({ token });

  if (!verificationToken) {
    throwError('INVALID_TOKEN', 'INVALID_TOKEN', 401);
    return;
  }

  // Check if the token has expired
  if (new Date() > verificationToken.expireAt) {
    throwError('EXPIRED_TOKEN', 'EXPIRED_TOKEN', 401);
    return;
  }

  // Find the user associated with this token
  const user = await User.findById(verificationToken.userId);

  if (!user) {
    throwError('USER_NOT_FOUND', 'USER_NOT_FOUND', 401);
    return;
  }

  // Update the user's verification status
  user.isVerified = true;
  await user.save();

  // Delete the verification token as it has been used
  await EmailVerificationToken.findByIdAndDelete(verificationToken.id);

  return 'success';
};

/**
 * Handle the forgot password request by generating and saving a reset token.
 *
 * @async
 * @param {Object} user - The user who has requested a password reset.
 * @param {string} user._id - The unique identifier of the user.
 * @param {string} user.email - The email address of the user.
 *
 * @returns {Promise<Object>} - A promise that resolves to an object containing a message indicating that the forgot password request has been processed.
 *
 * @throws Will throw an error if the reset token cannot be generated or saved.
 */
export const requestForgotPassword = async (user: IUser) => {
  await generateAndSaveResetToken(user);
  return { message: 'EMAIL_FORGOT_PASSWORD' };
};

/**
 * Reset the forgotten password of a user.
 *
 * @async
 * @param {Object} user - The user whose password needs to be reset.
 * @param {string} user._id - The unique identifier of the user.
 * @param {string} user.email - The email address of the user.
 * @param {string} user.password - The current hashed password of the user.
 * @param {string} user.resetToken - The current reset token of the user, if any.
 * @param {Date} user.resetTokenExpiration - The expiration date of the current reset token, if any.
 * @param {string} newPassword - The new plaintext password that will replace the user's old password.
 *
 * @returns {Promise<void>} - A promise that resolves when the user's password has been successfully reset and saved.
 *
 * @throws Will throw an error if the new password cannot be hashed or saved.
 */
export const requestresetForgotPassword = async (
  user: IUser,
  newPassword: string,
) => {
  const hashedPassword = await hash(newPassword, 12);
  user.password = hashedPassword;
  user.resetToken = undefined;
  user.resetTokenExpiration = undefined;
  await user.save();
};

/**
 * Fetch information of a user based on their unique ID.
 *
 * @async
 * @param {string} userId - The unique identifier of the user to fetch information for.
 *
 * @returns {Promise<Object>} userInfo - A promise that resolves with the user's information.
 * @returns {string} userInfo.username - The username of the user.
 * @returns {string} userInfo.email - The email address of the user.
 * @returns {string} userInfo.role - The role of the user.
 * @returns {boolean} userInfo.isVerified - The verification status of the user's email.
 *
 * @throws {Error} Will throw an error if the user is not found or any other error occurs.
 */
export const getUserInfo = async (userId: string) => {
  try {
    const user = await User.findById(userId).select('-password');

    const { username, email, role, isVerified } = user as IUser;

    const userInfo = {
      username,
      email,
      role,
      isVerified,
    };

    if (!user) {
      throw new Error('Utilisateur non trouvé');
    }
    return userInfo;
  } catch (error) {
    throw error;
  }
};

/**
 * Set an authentication cookie in the HTTP response.
 *
 * @param {Object} res - The HTTP response object.
 * @param {string} token - The JWT token to be set as a cookie.
 *
 * @returns {void}
 *
 * @example
 * // Set an authentication cookie in the response
 * setAuthCookie(res, 'some-jwt-token');
 */
export function setAuthCookie(res: Response, token: string) {
  // Define cookie options
  const cookieOptions: CookieOptions = {
    httpOnly: true,
    secure: env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 3600000,
  };

  // Set the cookie in the response
  res.cookie('token', token, cookieOptions);
}

/**
 * Update the information of a user in the database.
 *
 * This function performs multiple tasks such as checking for the user's existence,
 * updating the user's verification status if the email is changed, and saving the new data.
 *
 * @async
 * @param {string} userId - The ID of the user to be updated.
 * @param {Object} updateData - The new data to update the user with.
 * @param {string} [updateData.email] - New email of the user.
 * @param {string} [updateData.username] - New username of the user.
 * @param {string} [updateData.role] - New role of the user.
 * @param {boolean} [updateData.isVerified] - New verification status of the user.
 *
 * @returns {Promise<Object>} Returns an object containing success status, updated user data, and any notifications.
 *
 * @throws Will throw an error if updating the user fails.
 *
 * @example
 * // Update the email and username of a user
 * updateUserInfo('some-user-id', { email: 'new.email@example.com', username: 'newUsername' });
 */
export const updateUserInfo = async (userId: string, updateData: any) => {
  try {
    const currentUser = await User.findById(userId);
    if (!currentUser) {
      throw new Error('Utilisateur non trouvé.');
    }

    let notification = ''; // Pour stocker le message de notification

    if (updateData.email && currentUser.email !== updateData.email) {
      updateData.isVerified = false;
      const verificationInfo = await createVerificationToken(
        currentUser as IUser,
      );
      notification = 'MAIL_CHANGED';
    }

    const updatedUser = await User.findByIdAndUpdate(userId, updateData, {
      new: true,
      runValidators: true,
    });

    return { success: true, updatedUser, notification };
  } catch (error) {
    console.error("Erreur lors de la mise à jour de l'utilisateur :", error);
    throw error;
  }
};

/**
 * Retrieve all users from the database.
 *
 * This function uses the `.find({})` method on the `User` model to get an array of all user objects.
 *
 * @async
 * @returns {Promise<Array<Object>>} Returns a promise that resolves with an array of all user objects.
 *
 * @example
 * // Fetch all users
 * const users = await getAllUsers();
 */
export const getAllUsers = async () => {
  return await User.find({});
};

/**
 * Update a user's data in the database.
 *
 * This function takes a user ID and an object of data to update. It uses the `findByIdAndUpdate` method
 * on the `User` model to update the user's data and returns the updated user object.
 *
 * @async
 * @param {String} userId - The unique ID of the user to update.
 * @param {Object} updateData - An object containing the data to update.
 * @returns {Promise<Object>} Returns a promise that resolves with an object containing the update status and updated user data.
 *
 * @example
 * // Update a user's email
 * const updateData = { email: 'new.email@example.com' };
 * const result = await updateUser('someUserId', updateData);
 */
export const updateUser = async (userId: string, updateData: IUser) => {
  const user = await User.findByIdAndUpdate(userId, updateData, { new: true });
  return { success: true, notification: 'Utilisateur mis à jour', user };
};