const express = require('express');
const app = express();

// Define routes
app.get('/', (req, res) => {
  res.send('Welcome to EcoZone! Our online sustainability platform is dedicated to helping you live a more eco-friendly lifestyle through resources and tips on everything from reducing your carbon footprint to sustainable fashion.');
});

app.get('/carbon-footprint', (req, res) => {
  res.send('Learn how to reduce your carbon footprint with our collection of tips and resources.');
});

app.get('/sustainable-fashion', (req, res) => {
  res.send('Find out how to make your wardrobe more sustainable with our collection of tips and resources on sustainable fashion.');
});

app.get('/register', (req, res) => {
  res.send('Ready to live a more eco-friendly lifestyle? Register for our platform today and start your sustainability journey!');
});

// Start the server
app.listen(3000, () => {
  console.log('EcoZone server is running on port 3000.');
});