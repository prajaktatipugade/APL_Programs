const https = require('https');
const fs = require('fs');

const url = 'https://jsonplaceholder.typicode.com/posts';

https.get(url, (res) => {
  let data = '';

  // Collect data chunks
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    fs.writeFileSync('posts.json', data);
    console.log('Data written to posts.json');
  });
}).on('error', (err) => {
  console.log('Error:', err.message);
});
