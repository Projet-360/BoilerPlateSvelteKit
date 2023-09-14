const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const CryptoJS = require('crypto-js');
const nodemailer = require('nodemailer');
require('dotenv').config();

const router = express.Router();

// Route d'inscription
router.post('/signup', async (req, res) => {
  const { username, password } = req.body;
  //const hashedPassword = await bcrypt.hash(password, 12);
  const newUser = new User({ username, password });
  await newUser.save();

  // Générer un token JWT
  const token = jwt.sign(
    { userId: newUser._id, username: newUser.username },
    'your_jwt_secret',
    { expiresIn: '1h' }
  );

  res.status(201).json({ token, userId: newUser._id });
});

// Route de connexion
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // Trouver l'utilisateur dans la base de données
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  // Vérifier le mot de passe
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ message: 'Incorrect password' });
  }

  // Générer le token JWT
  const token = jwt.sign(
    { userId: user._id, username: user.username },
    'your_jwt_secret',
    { expiresIn: '1h' }
  );

  // Envoyer le token et l'ID de l'utilisateur au client
  res.status(200).json({ token, userId: user._id });
});

// Ajoutez cette route dans votre fichier de routes
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Ajoutez cette route dans votre fichier de routes
router.post('/forgot-password', async (req, res) => {
  const { email } = req.body;

  // Trouver l'utilisateur par email
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  // Générer un token de réinitialisation
  const resetToken = CryptoJS.lib.WordArray.random(32).toString();

  // Stockez ce token dans la base de données avec une date d'expiration
  user.resetPasswordToken = resetToken;
  user.resetPasswordExpires = Date.now() + 3600000; // 1 heure

  await user.save();

  // Envoi de l'email de réinitialisation du mot de passe
  transporter.sendMail({
    to: user.email,
    subject: 'Réinitialisation du mot de passe',
    text: `Vous avez demandé la réinitialisation du mot de passe. Utilisez ce token pour le faire: ${resetToken}`,
  }, (error, info) => {
    if (error) {
      return res.status(500).json({ message: 'Erreur lors de l\'envoi de l\'email', error });
    }
    res.status(200).json({ message: 'Reset token generated and email sent', token: resetToken });
  });
});

router.post('/reset-password', async (req, res) => {
  const { token, newPassword } = req.body;

  // Trouver l'utilisateur avec le token de réinitialisation correspondant et vérifier si le token a expiré
  const user = await User.findOne({
    resetPasswordToken: token,
    resetPasswordExpires: { $gt: Date.now() }
  });

  if (!user) {
    return res.status(400).json({ message: 'Token invalide ou expiré' });
  }

  // Hasher le nouveau mot de passe
  const hashedPassword = await bcrypt.hash(newPassword, 12);

  // Mettre à jour le mot de passe dans la base de données
  user.password = hashedPassword;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpires = undefined;

  await user.save();

  res.status(200).json({ message: 'Votre mot de passe a été réinitialisé avec succès' });
});

function logout() {
  authStore.set({ token: null, userId: null });
}

module.exports = router;
