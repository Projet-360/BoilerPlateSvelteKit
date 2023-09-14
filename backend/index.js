const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const Greeting = require('./models/GreetingModel');
const authRoutes = require('./routes/authRoutes');

mongoose.connect(process.env.BD, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB', err));

const app = express();
const PORT = process.env.PORT || 3001;

const cors = require('cors');
const corsOptions = {
  origin: 'http://localhost:5173', // Remplacez par l'URL de votre frontend
  optionsSuccessStatus: 204,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // pour autoriser les cookies
};

app.use(cors(corsOptions));
app.use(express.json());
app.use('/auth', authRoutes);

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

