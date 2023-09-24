class CustomError extends Error {
  constructor(name, message, statusCode) {
    super(message);
    this.name = name;
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = CustomError;
