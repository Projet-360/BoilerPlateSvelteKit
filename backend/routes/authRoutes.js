const express = require("express");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const { HTTP_STATUS } = require("../constants");
const authService = require("../services/authService");
const router = express.Router();

// Route d'inscription

// Ajoutez les middlewares de validation à votre route
router.post(
  "/signup",
  [
    check("username").notEmpty().withMessage("Le nom d'utilisateur est requis"),
    check("email").isEmail().withMessage("Veuillez entrer un email valide"),
    check("password")
      .isLength({ min: 5 })
      .withMessage("Le mot de passe doit avoir au moins 5 caractères"),
  ],
  async (req, res) => {
    // Gérez les erreurs de validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array()[0].msg });
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

      res.status(201).json({ userId, token });
    } catch (error) {
      next(error);
    }
  },
);

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

    res.status(200).json({ token, userId });
  } catch (error) {
    next(error);
  }
});

router.get("/check-auth", (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ isAuthenticated: false });
  }

  try {
    // Vérifie le token et récupère les données
    const decoded = jwt.verify(token, process.env.SECRETKEY);

    // Renvoie les données de l'utilisateur ainsi que le statut d'authentification
    res.status(200).json({
      isAuthenticated: true,
      token,
      userId: decoded.userId,
    });
  } catch (error) {
    //res.status(401).json({ isAuthenticated: false });
    next(error);
  }
});

// router.get("/logout", (req, res) => {
//   // Supprime le cookie
//   res.clearCookie("token");

//   // Vous pouvez également renvoyer une réponse pour confirmer la déconnexion
//   res.status(200).json({ message: "Déconnexion réussie" });
// });

router.get("/logout", (req, res, next) => {
  try {
    // Supprime le cookie
    res.clearCookie("token");
    console.log(HTTP_STATUS.OK);
    // Vous pouvez également renvoyer une réponse pour confirmer la déconnexion
    res.status(HTTP_STATUS.OK).json({ message: "Déconnexion réussie" });
  } catch (error) {
    next(error); // Passer l'erreur au middleware d'erreur centralisé
  }
});

module.exports = router;
