let readlineSync = require('readline-sync'); // this will import the package that allows the terminal to ask questions

 // this will store the user's input in the variable name.
let name = readlineSync.question('What is your first name? ');
console.log(`Hello, ${name}`);
