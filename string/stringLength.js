// counts the number of letters in a string.
function stringLength(string) {
  let waffles = string;
  console.log(waffles);
  let counter  = 0; // I did this because I know I need to return a number value at the end that counted the number of characters.
  for (let i = 0; i < string.length; i++) {
    // I knew to use a loop here because I need the computer to running for the length of the string, so it can count the characters.
    counter++;
    console.log(`The number of words so far: ${counter}`);
  }
  return counter;
}

console.log('TEST 1');
let test = stringLength('apples');
console.log(`When the loop ends the number of words is equal to counter (${test})`);
console.log();

console.log('TEST 2');
test = stringLength('');
console.log(`When the loop ends the number of words is equal to counter (${test})`);
