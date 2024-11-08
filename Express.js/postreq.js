const express = require('express');
const app = express();

app.use(express.json());

app.post('/submit', (req, res) => {
  const { name, age } = req.body;
  res.send(`Received data - Name: ${name}, Age: ${age}`);
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
