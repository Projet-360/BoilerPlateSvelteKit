const express = require("express");
const connectDB = require("./dbConnect"); // Importation du module de connexion à la BD
const config = require("./config/config"); // Importation de la configuration
const applyMiddlewares = require("./middlewares/middlewares.js"); // Importation des middlewares

const authRoutes = require("./routes/auth/authRoutes");
const greetingRoutes = require("./routes/greetingRoutes");

connectDB(); // Appel de la fonction pour connecter à la BD

const app = express();

applyMiddlewares(app); // Application des middlewares

app.use("/auth", authRoutes);
app.use("/api", greetingRoutes);

// Placez le middleware d'erreur ici
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
});

app.listen(config.PORT, () => {
  console.log(`Server is running on port ${config.PORT}`);
});

// Gestion des signaux pour une fermeture propre
process.on("SIGTERM", gracefulShutdown);
process.on("SIGINT", gracefulShutdown);

function gracefulShutdown() {
  console.log("\nReceived exit signal, shutting down gracefully.");

  // Fermer la connexion à la base de données
  mongoose.connection.close(() => {
    console.log("MongoDB connection closed.");
    process.exit(0);
  });
}
