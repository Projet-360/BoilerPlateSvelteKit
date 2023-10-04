// CustomError class that extends the built-in Error class
class CustomError extends Error {
	constructor(name, message, statusCode) {
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
