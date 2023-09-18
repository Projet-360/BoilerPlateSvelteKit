const { check } = require("express-validator");
const ERRORS = require("./../../constants/errorMessages");

exports.signupValidators = [
  // Nom d'utilisateur : non vide, longueur minimale et maximale
  check("username")
    .notEmpty()
    .withMessage(ERRORS.USERNAME_REQUIRED)
    .isLength({ min: 3, max: 20 })
    .withMessage("Le nom d'utilisateur doit avoir entre 3 et 20 caractères"),

  // Email : doit être un email valide
  check("email").isEmail().withMessage(ERRORS.VALID_EMAIL),

  // Mot de passe : longueur minimale, au moins une majuscule, une minuscule, un chiffre et un caractère spécial
  check("password")
    .isLength({ min: 8 })
    .withMessage("Le mot de passe doit avoir au moins 8 caractères")
    .matches(/[a-z]/)
    .withMessage("Le mot de passe doit contenir au moins une minuscule")
    .matches(/[A-Z]/)
    .withMessage("Le mot de passe doit contenir au moins une majuscule")
    .matches(/[0-9]/)
    .withMessage("Le mot de passe doit contenir au moins un chiffre")
    .matches(/[!@#$%^&*(),.?":{}|<>]/)
    .withMessage("Le mot de passe doit contenir au moins un caractère spécial"),
];
