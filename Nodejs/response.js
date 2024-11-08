const express = require('express');
const app = express();

app.get('/json', (req, res) => {
  res.json({ message: 'Hello, JSON!' });
});

app.listen(3000);
