const Greeting = require('./GreetingModel');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB', err));

const cors = require('cors');
app.use(cors());

// Middleware pour parser le JSON
app.use(express.json());


app.post('/api/greet', (req, res) => {
    const name = req.body.name || 'Guest';
    res.json({ message: `Hello, ${name}!` });
  });

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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

