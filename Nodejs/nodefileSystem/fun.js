// Traditional function declaration
function greet(name) {
  return `hello, ${name}!`;
}
console.log(greet("prajakta")); // Output: hello, prajakta!

// Function expression
const greet1 = function(name) {
  return `hello, ${name}!`;
}
console.log(greet1("prajakta")); // Output: hello, prajakta!

// Arrow function
const greet2 = (name) => `hello ${name}!`;
console.log(greet2("Prajakta")); // Output: hello Prajakta!

// Callback example using fs.readFile (Node.js asynchronous I/O)
const fs = require('fs');
fs.readFile('example.txt', 'utf8', function(err, data) {
  if (err) throw err;
  console.log(data);
});

// Promises example using fs.promises.readFile
const fsPromises = require('fs').promises;
fsPromises.readFile('example.txt', 'utf8')
  .then(data => console.log(data))
  .catch(err => console.error(err));

// Async/await example with fs.promises.readFile
async function readFile() {
  try {
    const data = await fsPromises.readFile('example.txt', 'utf8');
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
readFile();

// Higher-order function example
function higherOrder(fn) {
  fn();
}
higherOrder(() => console.log("I'm a callback!"));

// Immediately Invoked Function Expression (IIFE)
(function() {
  console.log("This runs immediately");
})();
