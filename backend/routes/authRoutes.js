const express = require("express");
const jwt = require("jsonwebtoken");

const authService = require("../services/authService");

require("dotenv").config();

const router = express.Router();

// Route d'inscription
router.post("/signup", async (req, res) => {
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
      secure: true, // Notez que 'secure: true' fonctionnera seulement si vous utilisez HTTPS
      sameSite: "strict",
      maxAge: 3600000,
    });

    res.status(201).json({ userId, token });
  } catch (error) {
    console.error("Erreur lors de l'inscription:", error);
    res.status(500).json({ error: error.message });
  }
});

// Route de connexion
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const { token, userId } = await authService.login(email, password);
    console.log(token);
    // Définir le cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 3600000,
    });

    res.status(200).json({ token, userId });
  } catch (error) {
    // Le message d'erreur peut être personnalisé en fonction de l'erreur renvoyée
    res.status(400).json({ message: error.message });
  }
});

router.get("/check-auth", (req, res) => {
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
    res.status(401).json({ isAuthenticated: false });
  }
});

// // Ajoutez cette route dans votre fichier de routes
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// // Ajoutez cette route dans votre fichier de routes
// router.post("/forgot-password", async (req, res) => {
//   const { email } = req.body;

//   // Trouver l'utilisateur par email
//   const user = await User.findOne({ email });
//   if (!user) {
//     return res.status(404).json({ message: "User not found" });
//   }

//   // Générer un token de réinitialisation
//   const resetToken = CryptoJS.lib.WordArray.random(32).toString();

//   // Stockez ce token dans la base de données avec une date d'expiration
//   user.resetPasswordToken = resetToken;
//   user.resetPasswordExpires = Date.now() + 3600000; // 1 heure

//   await user.save();

//   // Envoi de l'email de réinitialisation du mot de passe
//   transporter.sendMail(
//     {
//       to: user.email,
//       subject: "Réinitialisation du mot de passe",
//       text: `Vous avez demandé la réinitialisation du mot de passe. Utilisez ce token pour le faire: ${resetToken}`,
//     },
//     (error, info) => {
//       if (error) {
//         return res
//           .status(500)
//           .json({ message: "Erreur lors de l'envoi de l'email", error });
//       }
//       res.status(200).json({
//         message: "Reset token generated and email sent",
//         token: resetToken,
//       });
//     },
//   );
// });

// router.post("/reset-password", async (req, res) => {
//   const { token, newPassword } = req.body;

//   // Trouver l'utilisateur avec le token de réinitialisation correspondant et vérifier si le token a expiré
//   const user = await User.findOne({
//     resetPasswordToken: token,
//     resetPasswordExpires: { $gt: Date.now() },
//   });

//   if (!user) {
//     return res.status(400).json({ message: "Token invalide ou expiré" });
//   }

//   // Hasher le nouveau mot de passe
//   const hashedPassword = await bcrypt.hash(newPassword, 12);

//   // Mettre à jour le mot de passe dans la base de données
//   user.password = hashedPassword;
//   user.resetPasswordToken = undefined;
//   user.resetPasswordExpires = undefined;

//   await user.save();

//   res
//     .status(200)
//     .json({ message: "Votre mot de passe a été réinitialisé avec succès" });
// });

router.get("/logout", (req, res) => {
  // Supprime le cookie
  res.clearCookie("token");

  // Vous pouvez également renvoyer une réponse pour confirmer la déconnexion
  res.status(200).json({ message: "Déconnexion réussie" });
});
module.exports = router;
