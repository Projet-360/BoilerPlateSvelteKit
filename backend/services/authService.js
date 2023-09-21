const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const User = require("../models/UserModel");
const EmailVerificationToken = require("../models/EmailVerificationTokenModel");
const {
  sendVerificationEmail,
  sendResetPasswordEmail,
} = require("../services/emailService");

// Fonction pour générer un token de vérification
const generateToken = () => {
  return crypto.randomBytes(32).toString("hex");
};

exports.signup = async (username, email, password) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    const token = jwt.sign(
      { userId: newUser._id, username: newUser.username, email: newUser.email },
      process.env.SECRETKEY,
      { expiresIn: "1h" },
    );

    // Générer le token de vérification
    const verificationToken = generateToken();
    await sendVerificationEmail(email, verificationToken);

    // Définir la date d'expiration du token de vérification
    const expireAt = new Date();
    expireAt.setHours(expireAt.getHours() + 24); // Le token expirera dans 24 heures

    // Créer un nouvel objet EmailVerificationToken
    const newToken = new EmailVerificationToken({
      userId: newUser._id,
      token: verificationToken,
      expireAt: expireAt,
    });
    await newToken.save();

    return { token, userId: newUser._id };
  } catch (error) {
    console.error("Erreur lors de l'inscription:", error);
    throw error; // Renvoyer l'erreur pour la gérer côté client
  }
};

exports.login = async (email, password) => {
  // Trouver l'utilisateur par email
  const user = await User.findOne({ email });
  if (!user) {
    // Vous pouvez ajouter des logs ici
    throw new Error("Invalid credentials");
  }

  // Vérifier si le mot de passe correspond
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    // Vous pouvez ajouter des logs ici
    throw new Error("Invalid credentials");
  }

  // Vérification supplémentaire: est-ce que l'email a été vérifié, etc.
  // ...

  // Générer un JWT
  const token = jwt.sign(
    { userId: user._id, email: user.email },
    process.env.SECRETKEY,
    { expiresIn: "1h" },
  );

  return { token, userId: user._id };
};

exports.verifyToken = async (token) => {
  // Trouver le token dans la base de données
  const verificationToken = await EmailVerificationToken.findOne({ token });

  if (!verificationToken) {
    throw new Error("Token invalide");
  }

  // Vérifier si le token a expiré
  if (new Date() > verificationToken.expireAt) {
    throw new Error("Token expiré");
  }

  // Trouver l'utilisateur associé à ce token
  const user = await User.findById(verificationToken.userId);

  if (!user) {
    throw new Error("Utilisateur introuvable");
  }

  // Mettre à jour le statut de vérification de l'utilisateur
  user.isVerified = true;
  await user.save();

  // Supprimer le token de vérification car il a été utilisé
  await EmailVerificationToken.findByIdAndDelete(verificationToken.id);

  return "E-mail vérifié avec succès !";
};

exports.requestResetPassword = async (user) => {
  try {
    const resetToken = generateToken();
    user.resetToken = resetToken;
    user.resetTokenExpiration = Date.now() + 3600000; // Le token expire dans 1 heure
    await user.save();

    await sendResetPasswordEmail(user, resetToken);

    return { message: "Un e-mail de réinitialisation a été envoyé." };
  } catch (error) {
    console.error(
      "Erreur lors de la génération du token de réinitialisation :",
      error,
    );
    throw error;
  }
};
