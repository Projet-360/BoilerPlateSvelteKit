import mongoose from "mongoose";

const GreetingSchema = new mongoose.Schema({
  name: String,
  message: String,
});

const Greeting = mongoose.model("Greeting", GreetingSchema);

export default Greeting;
