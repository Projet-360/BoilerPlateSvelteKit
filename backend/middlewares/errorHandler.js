const { HTTP_STATUS } = require("../constants");

const errorHandler = (err, req, res, next) => {
  // Log de l'erreur
  console.error(err.stack);

  // Personnalisation du message d'erreur selon l'environnement
  const errorMessage =
    process.env.NODE_ENV === "production"
      ? "Une erreur s'est produite"
      : err.message;

  // Gestion des différents types d'erreurs
  let statusCode = HTTP_STATUS.INTERNAL_SERVER_ERROR; // Par défaut à 500
  if (err.name === "ValidationError") {
    statusCode = HTTP_STATUS.BAD_REQUEST;
  }

  res.status(statusCode).json({
    message: errorMessage,
    // Vous pouvez ajouter plus d'informations ici si nécessaire
  });
};

module.exports = errorHandler;
