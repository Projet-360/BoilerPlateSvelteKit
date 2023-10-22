// validators.js

import { ValidationChain, check } from 'express-validator';
import { ERRORS } from '../constants/errorMessages.js';

export const usernameValidators = [
  check('username')
    .notEmpty()
    .withMessage(ERRORS.USERNAME_REQUIRED)
    .isLength({ min: 3, max: 20 })
    .withMessage(ERRORS.VALID_USERNAME),
];

export const emailValidators = [
  check('email').isEmail().withMessage(ERRORS.VALID_EMAIL),
];

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
    .withMessage(ERRORS.SPECIAL_CARAC_PASSWORD),
];

export const inputTextValidators: ValidationChain[] = [
  check('name').not().isEmpty().withMessage('Name should not be empty'),
  check('name').escape(),
  check('name')
    .isLength({ min: 2, max: 50 })
    .withMessage('Name should be between 2 and 50 characters'),

  check('message').not().isEmpty().withMessage('Message should not be empty'),
  check('message').escape(),
  check('message')
    .isLength({ min: 5, max: 500 })
    .withMessage('Message should be between 5 and 500 characters'),
];

export const signupValidators: ValidationChain[] = [
  ...usernameValidators,
  ...emailValidators,
  ...passwordValidators,
];
export const updateUserValidators: ValidationChain[] = [
  ...usernameValidators,
  ...emailValidators,
];
export const greetingsValidators: ValidationChain[] = [...inputTextValidators];
