const { validationResult } = require("express-validator");
const HTTP_STATUS = require("../constants/HTTP_STATUS");

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(HTTP_STATUS.BAD_REQUEST)
      .json({ message: errors.array()[0].msg });
  }
  next();
};

module.exports = handleValidationErrors;
