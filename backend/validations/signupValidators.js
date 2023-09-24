const { check } = require("express-validator");
const ERRORS = require("../constants/errorMessages");

exports.signupValidators = [
  // Nom d'utilisateur : non vide, longueur minimale et maximale
  check("username")
    .notEmpty()
    .withMessage(ERRORS.USERNAME_REQUIRED)
    .isLength({ min: 3, max: 20 })
    .withMessage(ERRORS.VALID_USERNAME),

  // Email : doit être un email valide
  check("email").isEmail().withMessage(ERRORS.VALID_EMAIL),

  // Mot de passe : longueur minimale, au moins une majuscule, une minuscule, un chiffre et un caractère spécial
  check("password")
    .isLength({ min: 8 })
    .withMessage(ERRORS.NUMBE_CARAC_PASSWORD)
    .matches(/[a-z]/)
    .withMessage(ERRORS.MIN_PASSWORD)
    .matches(/[A-Z]/)
    .withMessage(ERRORS.MAJ_PASSWORD)
    .matches(/[0-9]/)
    .withMessage(ERRORS.NUMBER_PASSWORD)
    .matches(/[!@#$%^&*(),.?":{}|<>]/)
    .withMessage(ERRORS.SPECIAL_CARAC_PASSWORD),
];
