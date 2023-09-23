const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const HTTP_STATUS = require("../../constants/HTTP_STATUS");
const rateLimit = require("express-rate-limit");

const User = require("../../models/UserModel");
const BlacklistedToken = require("../../models/BlacklistedTokenModel");

const authService = require("../../services/authService");
const setAuthCookie = require("../../services/setAuthCookie");
const handleValidationErrors = require("../../middlewares/handleValidationErrors");

const { signupValidators } = require("./validators");

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  handler: function (req, res) {
    console.log("Rate limit reached"); // Ajoute ce log pour le débogage
    res.status(HTTP_STATUS.TOO_MANY_REQUESTS).json({
      message: "RATE_LIMIT",
    });
  },
});

router.get("/check-auth", async (req, res, next) => {
  const token = req.cookies.token;

  try {
    const result = await authService.checkAuthentication(token);

    if (result.isAuthenticated) {
      res.status(HTTP_STATUS.OK).json({
        isAuthenticated: true,
        token: result.token,
        userId: result.userId,
      });
    } else {
      if (result.message) {
        res.status(HTTP_STATUS.UNAUTHORIZED).json({
          isAuthenticated: false,
          message: result.message,
        });
      } else {
        res.status(HTTP_STATUS.OK).json({ isAuthenticated: false });
      }
    }
  } catch (error) {
    next(error);
  }
});

router.post(
  "/signup",
  [signupValidators, handleValidationErrors],
  async (req, res, next) => {
    try {
      const { username, email, password } = req.body;
      const { token } = await authService.signup(username, email, password);
      setAuthCookie(res, token);
      res
        .status(HTTP_STATUS.CREATED)
        .json({ message: "Success", success: true });
    } catch (error) {
      next(error);
    }
  },
);

router.post("/login", loginLimiter, async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const { token, userId } = await authService.login(email, password);
    // Définir le cookie
    setAuthCookie(res, token);

    res.status(HTTP_STATUS.OK).json({ token, userId });
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

  // Validation de l'email (à faire si ce n'est pas déjà le cas)
  if (!email || !email.includes("@")) {
    return res.status(400).json({ error: "E-mail invalide" });
  }

  try {
    // Rechercher l'utilisateur dans la base de données
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: "Utilisateur non trouvé" });
    }

    const result = await authService.requestResetPassword(user);
    res.status(200).json({ message: result.message });
  } catch (error) {
    console.error("Erreur lors de la réinitialisation du mot de passe:", error);
    res.status(500).json({ message: error.message });
  }
});

router.post("/reset-password/:token", async (req, res) => {
  const { token } = req.params;
  const { newPassword } = req.body;

  // Trouver l'utilisateur avec le token de réinitialisation
  const user = await User.findOne({
    resetToken: token,
    resetTokenExpiration: { $gt: Date.now() },
  });

  if (!user) {
    return res.status(400).json({ error: "Token invalide ou expiré" });
  }

  // Chiffrer le nouveau mot de passe et le sauvegarder
  const hashedPassword = await bcrypt.hash(newPassword, 12);
  user.password = hashedPassword;
  user.resetToken = undefined;
  user.resetTokenExpiration = undefined;
  await user.save();

  res.status(200).json({ message: "Mot de passe réinitialisé avec succès" });
});

module.exports = router;
