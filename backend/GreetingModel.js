const mongoose = require('mongoose');

const GreetingSchema = new mongoose.Schema({
  name: String,
  message: String
});

const Greeting = mongoose.model('Greeting', GreetingSchema);

module.exports = Greeting;
