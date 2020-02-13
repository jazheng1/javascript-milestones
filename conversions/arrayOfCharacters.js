// this function will take in a string and covert it to an array of characters

function stringToCharArray(string) {
  // I declared a new array because I know I need to place the characters in an array and currently isn't an existing one
  let charArray = [];

  // I knew to use a loop here because I want the computer to run more than once to execute what I want it to do
  for (let i = 0; i < string.length; i++) {
    charArray.push(string[i]);
    // the push function will place each char at the end, which is perfect if we are spelling a word from the beginning
  }
  return charArray;
}

// tests
let test = stringToCharArray('Bananas');
// because of the return statement, test will be assigned whatever charArray is
console.log('The array of characters:', test);
