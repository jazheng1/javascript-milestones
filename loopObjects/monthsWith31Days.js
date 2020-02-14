// this is the syntax to import things; it sets whatever you are importing to a variable, daysInMonth in this case
// you can change the name of the variable and all other instances of it and it will still work
let daysInMonth = require('../objects/daysInMonth.js');

console.log('The Calender:', daysInMonth);
console.log();

for (let keys in daysInMonth) {
  if (daysInMonth[keys] === 31) { // daysInMonth[keys] will look at the value that the key has and checks to see if it is equal to 31
    console.log(' This month has 31 days:', keys);
  }
}
