const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const HTTP_STATUS = require("../../constants/HTTP_STATUS");
const authService = require("../../services/authService");
const rateLimit = require("express-rate-limit");

const { signupValidators } = require("./validators");
const BlacklistedToken = require("../../models/BlacklistedTokenModel");
const User = require("../../models/UserModel");

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  handler: function (req, res) {
    console.log("Rate limit reached"); // Ajoute ce log pour le débogage
    res.status(HTTP_STATUS.TOO_MANY_REQUESTS).json({
      message: "Trop de tentatives de connexion, veuillez réessayer plus tard.",
    });
  },
});
// Ajoutez les middlewares de validation à votre route
router.post("/signup", signupValidators, async (req, res, next) => {
  // Gérez les erreurs de validation
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res
      .status(HTTP_STATUS.BAD_REQUEST)
      .json({ message: errors.array()[0].msg });
  }

  try {
    const { username, email, password } = req.body;

    const existingUserByEmail = await User.findOne({ email });
    if (existingUserByEmail) {
      throw new Error("Email already exists");
    }

    const { token, userId } = await authService.signup(
      username,
      email,
      password,
    );

    // Définir le cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 3600000,
    });

    res.status(HTTP_STATUS.CREATED).json({ userId, token });
  } catch (error) {
    next(error);
  }
});
// Route de connexion
router.post("/login", loginLimiter, async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const { token, userId } = await authService.login(email, password);
    // Définir le cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 3600000,
    });

    res.status(HTTP_STATUS.OK).json({ token, userId });
  } catch (error) {
    // Si une erreur se produit, renvoyez un code d'erreur approprié et un message explicatif.
    res
      .status(HTTP_STATUS.UNAUTHORIZED)
      .json({ message: "Identifiants invalides." });
  }
});

router.get("/check-auth", async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res
      .status(HTTP_STATUS.UNAUTHORIZED)
      .json({ isAuthenticated: false });
  }

  try {
    // Vérifie si le token est dans la liste noire
    const blacklistedToken = await BlacklistedToken.findOne({ token });
    if (blacklistedToken) {
      return res.status(HTTP_STATUS.UNAUTHORIZED).json({
        isAuthenticated: false,
        message: "Le token est dans la liste noire.",
      });
    }

    // Vérifie le token et récupère les données
    const decoded = jwt.verify(token, process.env.SECRETKEY);

    // Renvoie les données de l'utilisateur ainsi que le statut d'authentification
    res.status(HTTP_STATUS.OK).json({
      isAuthenticated: true,
      token,
      userId: decoded.userId,
    });
  } catch (error) {
    next(error);
  }
});

router.get("/logout", async (req, res, next) => {
  try {
    const token = req.cookies.token;
    const newBlacklistedToken = new BlacklistedToken({ token });
    await newBlacklistedToken.save();

    res.clearCookie("token");
    res.status(200).json({ message: "Déconnexion réussie" });
  } catch (error) {
    next(error);
  }
});

router.get("/verify/:token", async (req, res) => {
  try {
    const { token } = req.params;

    const message = await authService.verifyToken(token);

    res.status(200).json({ message });
  } catch (error) {
    console.error("Erreur lors de la vérification de l'e-mail:", error);
    res.status(500).json({ message: error.message });
  }
});

router.post("/reset-password", async (req, res) => {
  const { email } = req.body;

  // Rechercher l'utilisateur dans la base de données
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({ error: "Utilisateur non trouvé" });
  }

  await authService.requestResetPassword(user);
});

module.exports = router;
