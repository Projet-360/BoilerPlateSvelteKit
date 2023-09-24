import dotenv from "dotenv";
dotenv.config();

const config = {
  PORT: process.env.PORT || 3001,
  DB_URI: process.env.BD,
  TOKEN_EXPIRY: process.env.TOKEN_EXPIRY || "1h",
  SECRETKEY: process.env.SECRETKEY || "your-secret-key",
  VERIFICATION_EXPIRY_HOURS: 24,
};

export default config;
