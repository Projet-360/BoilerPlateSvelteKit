const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.BD, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Could not connect to MongoDB", err);
    // Vous pouvez ici soit propager l'erreur, soit renvoyer une promesse rejetée
    return Promise.reject(err);
  }
};

module.exports = connectDB;
