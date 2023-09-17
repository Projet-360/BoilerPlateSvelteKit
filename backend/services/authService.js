const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

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

    return { token, userId: newUser._id };
  } catch (error) {
    console.error("Erreur lors de l'inscription:", error);
    throw new Error("Une erreur interne s'est produite");
  }
};

exports.login = async (username, password) => {
  const user = await User.findOne({ username });
  if (!user) {
    throw new Error("User not found");
  }

  console.log("Password from request:", password);
  console.log("Hashed password from DB:", user.password);

  const isMatch = await bcrypt.compare(password, user.password);
  console.log("Is match:", isMatch);
  if (!isMatch) {
    throw new Error("Incorrect password");
  }

  const token = jwt.sign(
    { userId: user._id, username: user.username },
    process.env.SECRETKEY,
    { expiresIn: "1h" },
  );

  return { token, userId: user._id };
};
