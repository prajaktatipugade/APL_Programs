const fsPromises = require('fs').promises;

function readFile(filePath) {
    return fsPromises.readFile(filePath, 'utf8')
        .then(data => data)
        .catch(err => {
            throw new Error("Error reading file: " + err);
        });
}

module.exports = readFile;
