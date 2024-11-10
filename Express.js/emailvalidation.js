const express = require('express');
const app = express();

app.use(express.json());

app.post('/validate-email', (req, res) => {
  const { email } = req.body;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(email)) {
    res.send('Valid email');
  } else {
    res.status(400).send('Invalid email');
  }
});

app.listen(3000, () => console.log('Email validation server running on port 3000'));
