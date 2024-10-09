const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const cheerio = require('cheerio');
const axios = require('axios');
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/webscraping', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const User = mongoose.model('User', {
  name: String,
  email: String,
  password: String,
});

// Register route
app.post('/api/register', async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ name, email, password: hashedPassword });
  await user.save();
  res.json({ message: 'User registered successfully' });
});

// Login route
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.json({ message: 'User not found' });
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.json({ message: 'Incorrect password' });
  }
  res.json({ message: 'Login successful' });
});

// Web scraping route (example)
app.get('/api/scrape', async (req, res) => {
  const url = 'https://example.com'; // replace with the target website
  const { data } = await axios.get(url);
  const $ = cheerio.load(data);
  const scrapedData = [];
  $('h2').each((i, element) => {
    scrapedData.push($(element).text());
  });
  res.json(scrapedData);
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
