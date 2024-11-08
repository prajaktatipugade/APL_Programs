const fsPromises = require('fs').promises;

function appendFile(filePath, content) {
    return fsPromises.appendFile(filePath, content, 'utf8')
        .then(() => "File appended successfully.")
        .catch(err => {
            throw new Error("Error appending file: " + err);
        });
}

module.exports = appendFile;
