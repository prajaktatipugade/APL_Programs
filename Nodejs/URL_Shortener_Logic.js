const express = require('express');
const app = express();

const urlMap = new Map();

app.get('/shorten', (req, res) => {
  const { url } = req.query;
  const shortUrl = Math.random().toString(36).substring(2, 8);
  urlMap.set(shortUrl, url);
  res.send(`Shortened URL: /${shortUrl}`);
});
app.get('/:shortUrl', (req, res) => {
  const originalUrl = urlMap.get(req.params.shortUrl);
  if (originalUrl) res.redirect(originalUrl);
  else res.send('URL not found');
});

app.listen(3000, () => console.log('URL Shortener running on port 3000'));
