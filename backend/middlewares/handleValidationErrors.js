import { validationResult } from "express-validator";
import { HTTP_STATUS } from "../constants/HTTP_STATUS.js";
import CustomError from "../errors/CustomError.js"; // Assurez-vous que le chemin est correct

export const handleValidationErrors = (req, res, next) => {
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
