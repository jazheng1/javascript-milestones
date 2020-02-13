// I will use a function to help me do this, so it is not as redundant
function arrayToString(array) {
  let string = '';
  for (let i = 0; i < array.length ; i++) {
    console.log('When i is', i, 'The string is:', string);
    string += array[i];
  }
  return string;
}

// tests
let test = arrayToString(['one', '--two--', 'three']);
console.log('The array combined together is:', test);
