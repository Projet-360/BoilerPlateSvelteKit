const express = require("express");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const HTTP_STATUS = require("../../constants/HTTP_STATUS");
const authService = require("../../services/authService");
const router = express.Router();
const { signupValidators } = require("./validators");

const BlacklistedToken = require("../../models/BlacklistedTokenModel");

// Ajoutez les middlewares de validation à votre route
router.post("/signup", signupValidators, async (req, res) => {
  // Gérez les erreurs de validation
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(HTTP_STATUS.BAD_REQUEST)
      .json({ message: errors.array()[0].msg });
  }

  // Votre logique existante
  try {
    const { username, email, password } = req.body;

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
router.post("/login", async (req, res, next) => {
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
    next(error);
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

module.exports = router;
