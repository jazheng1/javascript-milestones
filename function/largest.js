let larger = require('./larger.js');

function largest(array) {
  let biggest = 0;
  for(let i = 0; i < array.length; i += 2) {
    console.log();
    // Without the if-statement here, biggest will be set to the biggest of the last 2 elements of the array
    // the conditional here will compare biggest to the bigger number between the two numbers being compared by larger()
    if (biggest < larger(array[i],array[i+1])) {
      biggest = larger(array[i], array[i+1]);
    }
  }
  console.log();
  console.log('This is the biggest number:', biggest);
  return biggest;
}

// test
largest([2, 100, 30, -20]);
