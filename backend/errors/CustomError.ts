/**
 * CustomError class for throwing application-specific errors.
 *
 * Extends the built-in Error class and adds a `statusCode` property
 * to handle HTTP errors. The `name` property is set to allow
 * for easier debugging and logging.
 *
 * @extends {Error}
 */
class CustomError extends Error {
  /**
   * The HTTP status code associated with the error.
   */
  statusCode: number;

  /**
   * Create a new custom error object.
   *
   * @param {string} name - The name of the error, usually a short identifier.
   * @param {string} message - A detailed error message.
   * @param {number} statusCode - The HTTP status code associated with the error.
   */
  constructor(name: string, message: string, statusCode: number) {
    // Call the constructor of the Error class and pass the error message
    super(message);

    // Set the name, statusCode, and capture stack trace
    this.name = name; // A custom name for the error
    this.statusCode = statusCode; // HTTP status code associated with the error

    // Capture the stack trace to include the call stack when the error was created
    Error.captureStackTrace(this, this.constructor);
  }
}

export default CustomError;
