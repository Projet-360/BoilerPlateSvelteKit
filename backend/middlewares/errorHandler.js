const HTTP_STATUS = require("../constants/HTTP_STATUS");

const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  let statusCode = HTTP_STATUS.INTERNAL_SERVER_ERROR;

  if (err instanceof CustomError) {
    console.log("CustomError capturé dans errorHandler:", err);
    statusCode = err.statusCode;
  }

  if (err instanceof CustomError) {
    statusCode = err.statusCode;
  } else if (err.name === "ValidationError") {
    statusCode = HTTP_STATUS.BAD_REQUEST;
  }

  const errorMessage =
    process.env.NODE_ENV === "production"
      ? "Une erreur s'est produite"
      : err.message;

  res.status(statusCode).json({ message: errorMessage });
};

module.exports = errorHandler;
