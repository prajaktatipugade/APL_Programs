const express = require('express');
const app = express();

const rateLimit = (req, res, next) => {
  const userIp = req.ip;
  const now = Date.now();

  if (!req.app.locals[userIp]) {
    req.app.locals[userIp] = { count: 1, timestamp: now };
  } else {
    const elapsed = now - req.app.locals[userIp].timestamp;

    if (elapsed < 60000 && req.app.locals[userIp].count >= 5) {
      return res.status(429).send('Too many requests, please try again later.');
    }

    if (elapsed >= 60000) {
      req.app.locals[userIp].count = 1;
      req.app.locals[userIp].timestamp = now;
    } else {
      req.app.locals[userIp].count++;
    }
  }

  next();
};

app.use(rateLimit);

app.get('/', (req, res) => {
  res.send('Welcome! You are within the rate limit.');
});

app.listen(3000, () => console.log('Server running on port 3000'));

