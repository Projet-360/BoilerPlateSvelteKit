const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

exports.signup = async (username, email, password) => {
  try {
    // Validation de l'email
    if (!email || !email.includes("@")) {
      throw new Error("Email invalide");
    }

    // Validation du mot de passe
    if (password.length < 5) {
      throw new Error("Le mot de passe doit comporter au moins 5 caractères");
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    const token = jwt.sign(
      { userId: newUser._id, username: newUser.username, email: newUser.email },
      process.env.SECRETKEY,
      { expiresIn: "1h" },
    );

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
