const http = require('http');

http.createServer((req, res) => {
  const date = new Date().toLocaleString();
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`Current Date and Time: ${date}`);
}).listen(3000, () => console.log('Server running on port 3000'));
