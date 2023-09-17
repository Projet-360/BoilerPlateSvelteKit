require('dotenv').config();

module.exports = {
  PORT: process.env.PORT || 3001,
  DB_URI: process.env.BD,
};
