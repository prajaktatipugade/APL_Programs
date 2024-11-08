const path = require('path');
const filePath = path.join(__dirname, 'folder', 'file.txt');
console.log('Joined Path:', filePath);
console.log('Base Name:', path.basename(filePath));
console.log('Directory Name:', path.dirname(filePath));
console.log('File Extension:', path.extname(filePath));
console.log('Absolute Path:', path.resolve('file.txt'));
