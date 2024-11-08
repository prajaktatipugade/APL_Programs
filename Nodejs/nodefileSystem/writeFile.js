const fs = require('fs');

function writeFile(filePath, content) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, content, 'utf8', (err) => {
            if (err) {
                reject("Error writing file: " + err);
            } else {
                resolve("File written successfully.");
            }
        });
    });
}

module.exports = writeFile;
