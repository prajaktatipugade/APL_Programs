const os = require('os');
console.log('OS Type:', os.type());
console.log('Platform:', os.platform());
console.log('Total Memory:', os.totalmem());
console.log('Free Memory:', os.freemem());
console.log('CPU Details:', os.cpus());
console.log('Home Directory:', os.homedir());
console.log('System Uptime:', os.uptime(), 'seconds');
