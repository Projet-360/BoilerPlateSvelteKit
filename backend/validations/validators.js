// validators.js

import { check } from 'express-validator';
import { ERRORS } from '../constants/errorMessages.js';

export const usernameValidators = [
	check('username')
		.notEmpty()
		.withMessage(ERRORS.USERNAME_REQUIRED)
		.isLength({ min: 3, max: 20 })
		.withMessage(ERRORS.VALID_USERNAME)
];

export const emailValidators = [check('email').isEmail().withMessage(ERRORS.VALID_EMAIL)];

export const passwordValidators = [
	check('password')
		.isLength({ min: 8 })
		.withMessage(ERRORS.NUMBE_CARAC_PASSWORD)
		.matches(/[a-z]/)
		.withMessage(ERRORS.MIN_PASSWORD)
		.matches(/[A-Z]/)
		.withMessage(ERRORS.MAJ_PASSWORD)
		.matches(/[0-9]/)
		.withMessage(ERRORS.NUMBER_PASSWORD)
		.matches(/[!@#$%^&*(),\.\?":{}|<>_-]/)
		.withMessage(ERRORS.SPECIAL_CARAC_PASSWORD)
];

export const signupValidators = [...usernameValidators, ...emailValidators, ...passwordValidators];
export const updateUserValidators = [...usernameValidators, ...emailValidators];
