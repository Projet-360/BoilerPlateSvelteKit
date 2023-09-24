const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const {
  TOKEN_EXPIRY,
  SECRETKEY,
  VERIFICATION_EXPIRY_HOURS,
} = require("../config/config");
const { BAD_REQUEST } = require("../constants/HTTP_STATUS");

const User = require("../models/UserModel");
const EmailVerificationToken = require("../models/EmailVerificationTokenModel");
const BlacklistedToken = require("../models/BlacklistedTokenModel");

const CustomError = require("../errors/CustomError");

const {
  sendVerificationEmail,
  sendResetPasswordEmail,
} = require("../services/emailService");

// Fonction pour générer un token de vérification
const generateToken = () => {
  return crypto.randomBytes(32).toString("hex");
};

const throwError = (type, message, status) => {
  throw new CustomError(type, message, status);
};

const generateAndSaveResetToken = async (user) => {
  const resetToken = generateToken();
  user.resetToken = resetToken;
  user.resetTokenExpiration = Date.now() + 3600000;
  await user.save();
  await sendResetPasswordEmail(user, resetToken);
};

exports.createSignupToken = ({ _id: userId, username, email }) => {
  const token = jwt.sign({ userId, username, email }, SECRETKEY, {
    expiresIn: TOKEN_EXPIRY,
  });
  return { token };
};

exports.createVerificationToken = async (user) => {
  const verificationToken = generateToken();
  await sendVerificationEmail(user.email, verificationToken);

  const expireAt = new Date();
  expireAt.setHours(expireAt.getHours() + VERIFICATION_EXPIRY_HOURS);

  const newToken = new EmailVerificationToken({
    userId: user._id,
    token: verificationToken,
    expireAt: expireAt,
  });
  await newToken.save();

  return { verificationToken };
};

exports.hashPassword = async (password) => {
  return await bcrypt.hash(password, 12);
};

exports.checkEmailExists = async (email) => {
  const existingUserByEmail = await User.findOne({ email });
  if (existingUserByEmail) {
    throwError("EmailExists", "L'email existe déjà", BAD_REQUEST);
  }
};

exports.createUser = async (username, email, hashedPassword) => {
  const newUser = new User({ username, email, password: hashedPassword });
  await newUser.save();
  return newUser;
};

exports.checkAuthentication = async (token) => {
  if (!token) {
    console.log("Le client n'est pas connecté");
    return { isAuthenticated: false };
  }

  const blacklistedToken = await BlacklistedToken.findOne({ token });

  if (blacklistedToken) {
    return {
      isAuthenticated: false,
      message: "Le token est dans la liste noire.",
    };
  }

  const decoded = jwt.verify(token, SECRETKEY);

  return {
    isAuthenticated: true,
    token,
    userId: decoded.userId,
  };
};

exports.signup = async (email) => {
  try {
    const tokenExpiry = TOKEN_EXPIRY;

    const token = jwt.sign(
      { userId: newUser._id, username: newUser.username, email: newUser.email },
      SECRETKEY,
      { expiresIn: tokenExpiry },
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

    return { userId: newUser._id };
  } catch (error) {
    console.error("Erreur lors de l'inscription:", error);
    throwError("SignupError", error.message);
  }
};

exports.login = async (email, password) => {
  // Trouver l'utilisateur par email
  const user = await User.findOne({ email });
  if (!user) {
    // Vous pouvez ajouter des logs ici
    throwError("INVALID_CREDENTIALS");
  }

  if (!user.isVerified) {
    throwError("EMAIL_NOT_VERIFIED");
  }

  // Vérifier si le mot de passe correspond
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    // Vous pouvez ajouter des logs ici
    throwError("INVALID_CREDENTIALS");
  }

  // Vérification supplémentaire: est-ce que l'email a été vérifié, etc.
  // ...

  // Générer un JWT
  const token = jwt.sign({ userId: user._id, email: user.email }, SECRETKEY, {
    expiresIn: "1h",
  });

  return { token, userId: user._id };
};

exports.verifyToken = async (token) => {
  // Trouver le token dans la base de données
  const verificationToken = await EmailVerificationToken.findOne({ token });

  if (!verificationToken) {
    throwError("Token invalide");
  }

  // Vérifier si le token a expiré
  if (new Date() > verificationToken.expireAt) {
    throwError("Token expiré");
  }

  // Trouver l'utilisateur associé à ce token
  const user = await User.findById(verificationToken.userId);

  if (!user) {
    throwError("Utilisateur introuvable");
  }

  // Mettre à jour le statut de vérification de l'utilisateur
  user.isVerified = true;
  await user.save();

  // Supprimer le token de vérification car il a été utilisé
  await EmailVerificationToken.findByIdAndDelete(verificationToken.id);

  return "E-mail vérifié avec succès !";
};

exports.requestResetPassword = async (user) => {
  await generateAndSaveResetToken(user);
  return { message: "Un e-mail de réinitialisation a été envoyé." };
};

exports.ResetNewPassword = async (user) => {
  await generateAndSaveResetToken(user);
  return { message: "Un e-mail de réinitialisation a été envoyé." };
};
