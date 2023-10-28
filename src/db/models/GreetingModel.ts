// Import required modules
import mongoose from 'mongoose';

/**
 * Defines the schema for the Greeting model.
 */
const GreetingSchema = new mongoose.Schema({
	// Define the name field
	name: {
		type: String,
		required: true, // Makes the field mandatory
		trim: true // Removes any whitespace before and after
	},
	// Define the message field
	message: {
		type: String,
		required: true, // Makes the field mandatory
		trim: true // Removes any whitespace before and after
	}
});

/**
 * Create and export the Greeting model, only if it hasn't been defined yet.
 */
const Greeting = mongoose.models.Greeting || mongoose.model('Greeting', GreetingSchema);

export default Greeting;
