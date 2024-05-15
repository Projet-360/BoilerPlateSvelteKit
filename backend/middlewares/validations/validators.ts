import { ValidationChain, check } from 'express-validator';

export const usernameValidators = [
  check('variables.username')
    .notEmpty()
    .withMessage('USERNAME_REQUIRED')
    .isLength({ min: 3, max: 20 })
    .withMessage('VALID_USERNAME'),
];

export const emailValidators = [
  check('variables.email').isEmail().withMessage('VALID_EMAIL'),
];

export const passwordValidators = [
  check('variables.password')
    .isLength({ min: 8 })
    .withMessage('NUMBE_CARAC_PASSWORD')
    .matches(/[a-z]/)
    .withMessage('MIN_PASSWORD')
    .matches(/[A-Z]/)
    .withMessage('MAJ_PASSWORD')
    .matches(/[0-9]/)
    .withMessage('NUMBER_PASSWORD')
    .matches(/[!@#$%^&*(),\.\?":{}|<>_-]/)
    .withMessage('SPECIAL_CARAC_PASSWORD'),
];

export const newPasswordValidators = [
  check('variables.newPassword')
    .isLength({ min: 8 })
    .withMessage('NUMBE_CARAC_PASSWORD')
    .matches(/[a-z]/)
    .withMessage('MIN_PASSWORD')
    .matches(/[A-Z]/)
    .withMessage('MAJ_PASSWORD')
    .matches(/[0-9]/)
    .withMessage('NUMBER_PASSWORD')
    .matches(/[!@#$%^&*(),\.\?":{}|<>_-]/)
    .withMessage('SPECIAL_CARAC_PASSWORD'),
];

export const confirmPasswordValidators = [
  check('variables.confirmPassword')
    .isLength({ min: 8 })
    .withMessage('NUMBE_CARAC_PASSWORD')
    .matches(/[a-z]/)
    .withMessage('MIN_PASSWORD')
    .matches(/[A-Z]/)
    .withMessage('MAJ_PASSWORD')
    .matches(/[0-9]/)
    .withMessage('NUMBER_PASSWORD')
    .matches(/[!@#$%^&*(),\.\?":{}|<>_-]/)
    .withMessage('SPECIAL_CARAC_PASSWORD'),
];

export const nameValidator = [
  check('variables.name').not().isEmpty().withMessage('NAME_REQUIRED'),
  check('variables.name').escape(),
  check('variables.name')
    .isLength({ min: 5, max: 50 })
    .withMessage('NAME_MIN_MAX_CARAC'),
];

export const messageValidator = [
  check('variables.message').not().isEmpty().withMessage('MESSAGE_REQUIRED'),
  check('variables.message').escape(),
  check('variables.message')
    .isLength({ min: 5, max: 500 })
    .withMessage('MESSAGE_MIN_MAX_CARAC'),
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

export const resetForgotNewPassword: ValidationChain[] = [
  ...newPasswordValidators,
  ...confirmPasswordValidators,
];
