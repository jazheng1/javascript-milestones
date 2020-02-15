// the thing below imports a module in javascript that allows the terminal to read user input
let process = require('process')

// this function will accept a string and return the string hello with the name of the person
function greet(name) {
  return `hello ${name}`;
}

// test
let test = greet(process.argv[2]);
// process.argv[2] will read the 3 word on the line
// node [name of file] name <= the first two words is how you have the function run, so [2] will read the third thing that the user puts
// if you don't put a third word, it will say hello undefined

console.log(test);
