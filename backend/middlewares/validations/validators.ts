// validators.js

import { ValidationChain, check } from 'express-validator';
import { messageReturn } from '../../constants/errorMessages.js';

export const usernameValidators = [
  check('variables.username')
    .notEmpty()
    .withMessage(messageReturn.USERNAME_REQUIRED)
    .isLength({ min: 3, max: 20 })
    .withMessage(messageReturn.VALID_USERNAME),
];

export const emailValidators = [
  check('variables.email').isEmail().withMessage(messageReturn.VALID_EMAIL),
];

export const passwordValidators = [
  check('variables.password')
    .isLength({ min: 8 })
    .withMessage(messageReturn.NUMBE_CARAC_PASSWORD)
    .matches(/[a-z]/)
    .withMessage(messageReturn.MIN_PASSWORD)
    .matches(/[A-Z]/)
    .withMessage(messageReturn.MAJ_PASSWORD)
    .matches(/[0-9]/)
    .withMessage(messageReturn.NUMBER_PASSWORD)
    .matches(/[!@#$%^&*(),\.\?":{}|<>_-]/)
    .withMessage(messageReturn.SPECIAL_CARAC_PASSWORD),
];

export const nameValidator = [
  check('variables.name')
    .not()
    .isEmpty()
    .withMessage(messageReturn.NAME_REQUIRED),
  check('variables.name').escape(),
  check('variables.name')
    .isLength({ min: 5, max: 50 })
    .withMessage(messageReturn.NAME_MIN_MAX_CARAC),
];

export const messageValidator = [
  check('variables.message')
    .not()
    .isEmpty()
    .withMessage(messageReturn.MESSAGE_REQUIRED),
  check('variables.message').escape(),
  check('variables.message')
    .isLength({ min: 5, max: 500 })
    .withMessage(messageReturn.MESSAGE_MIN_MAX_CARAC),
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
export const greetingsValidators: ValidationChain[] = [
  ...nameValidator,
  ...messageValidator,
];
