// Import required modules and constants
import { check } from 'express-validator';
import { ERRORS } from '../constants/errorMessages.js';

// Validators for user signup
export const signupValidators = [
	// Username: must not be empty, and should be within a minimum and maximum length
	check('username')
		.notEmpty()
		.withMessage(ERRORS.USERNAME_REQUIRED)
		.isLength({ min: 3, max: 20 })
		.withMessage(ERRORS.VALID_USERNAME),

	// Email: must be a valid email address
	check('email').isEmail().withMessage(ERRORS.VALID_EMAIL),

	// Password: minimum length, must contain at least one lowercase, one uppercase, one digit and one special character
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

// Validator for email validation
export const validateEmail = [check('email').isEmail().withMessage(ERRORS.VALID_EMAIL)];
