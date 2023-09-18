const BlacklistedToken = require("../models/BlacklistedTokenModel");

const checkBlacklist = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    const isBlacklisted = await BlacklistedToken.findOne({ token });

    if (isBlacklisted) {
      return res.status(401).json({ message: "Token invalide" });
    }

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = checkBlacklist;
