import express from "express";
import connectDB from "./dbConnect.js"; // Importation du module de connexion à la BD
import config from "./config/config.js"; // Importation de la configuration
import applyMiddlewares from "./middlewares/middlewares.js"; // Importation des middlewares
import mongoose from "mongoose";

import authRoutes from "./routes/authRoutes.js";
import greetingRoutes from "./routes/greetingRoutes.js";

connectDB(); // Appel de la fonction pour connecter à la BD

const app = express();

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

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
  console.log(`Le serveur fonctionne sur le port ${config.PORT}`);
});

// Gestion des signaux pour une fermeture propre
process.on("SIGTERM", gracefulShutdown);
process.on("SIGINT", gracefulShutdown);

function gracefulShutdown() {
  console.log("\nSignal de sortie reçu, fermeture en cours.");

  // Fermer la connexion à la base de données
  mongoose.connection.close(() => {
    console.log("Connexion MongoDB fermée.");
    process.exit(0);
  });
}
