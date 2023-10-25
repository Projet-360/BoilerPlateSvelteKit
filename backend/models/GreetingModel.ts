// Import required modules
import mongoose from 'mongoose';

// Define the Greeting schema
const GreetingSchema = new mongoose.Schema({
  // Name field, simple string type
  name: String,
  // Message field, simple string type
  message: String,
});

// Export the Greeting model
const Greeting = mongoose.model('Greeting', GreetingSchema);
export default Greeting;
