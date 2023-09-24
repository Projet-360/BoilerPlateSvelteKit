const { validationResult } = require("express-validator");
const HTTP_STATUS = require("../constants/HTTP_STATUS");
const CustomError = require("../errors/CustomError"); // Assurez-vous que le chemin est correct

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map((err) => err.msg);
    const validationError = new CustomError(
      "ValidationError",
      errorMessages,
      HTTP_STATUS.BAD_REQUEST,
    );
    return next(validationError);
  }
  next();
};

module.exports = handleValidationErrors;
