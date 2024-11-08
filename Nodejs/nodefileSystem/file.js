// main.js
const writeFile = require('./writeFile');
const readFile = require('./readFile');
const appendFile = require('./appendFile');

const filePath = 'example.txt';
const initialContent = "This is the initial content.\n";
const contentToAppend = "This is the appended content.\n";

// 1. Writing to the file
writeFile(filePath, initialContent)
    .then(result => {
        console.log(result);

        // 2. Reading the file after writing
        return readFile(filePath);
    })
    .then(data => {
        console.log("File after writing:\n", data);

        // 3. Appending to the file
        return appendFile(filePath, contentToAppend);
    })
    .then(appendResult => {
        console.log(appendResult);

        // 4. Reading the file after appending
        return readFile(filePath);
    })
    .then(data => {
        console.log("File after appending:\n", data);
    })
    .catch(err => {
        console.error(err);
    });
