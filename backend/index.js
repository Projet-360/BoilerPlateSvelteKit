const Greeting = require('./GreetingModel');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27018/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB', err));

const cors = require('cors');
app.use(cors());

// Middleware pour parser le JSON
app.use(express.json());



// Read All
app.get('/api/getGreetings', async (req, res) => {
  const greetings = await Greeting.find({});
  res.json(greetings);
});

app.post('/api/saveGreeting', async (req, res) => {
  const { name, message } = req.body;
  const greeting = new Greeting({ name, message });
  await greeting.save();
  res.json({ status: 'saved' });
});

// Read One
app.get('/api/getGreeting/:id', async (req, res) => {
  const greeting = await Greeting.findById(req.params.id);
  res.json(greeting);
});

// Update
app.put('/api/updateGreeting/:id', async (req, res) => {
  const updatedGreeting = await Greeting.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedGreeting);
});

// Delete
app.delete('/api/deleteGreeting/:id', async (req, res) => {
  await Greeting.findByIdAndDelete(req.params.id);
  res.json({ status: 'deleted' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

