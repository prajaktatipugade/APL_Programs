const dns = require('dns');
dns.lookup('example.com', (err, address, family) => {
  if (err) throw err;
  console.log('Address:', address, 'Family:', family);
});

dns.resolve4('google.com', (err, addresses) => {
  if (err) throw err;
  console.log('IPv4 addresses:', addresses);
});

dns.reverse('8.8.8.8', (err, hostnames) => {
  if (err) throw err;
  console.log('Reverse Lookup:', hostnames);
});
