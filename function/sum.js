let add = require('./add.js');

function sum(array) {
  let total = 0;
  for (let i = 0; i < array.length; i +=2) {
    // because there is a problem with a number repeating itself if I did i++, i used i+=2 to skip over the 2 numbers that I just added
    total += add(i , i+1);
    // I knew that I wanted to add the first number, so I did I, but to add the second number I did i+1, to have it move to the next index
  }
  return total;
}

// test
console.log(sum([1, 2, 3, 4, 5]));
