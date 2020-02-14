let listOfStrings = ['apples', 'bee', 'cat', 'deer', 'elephant', 'frogs'];

// this loop will print out the longest string
console.log('PRINTING THE LONGEST STRING')
let longestString = '';
for (let i = 0 ; i < listOfStrings.length; i++) {
  if (listOfStrings[i].length > longestString.length) {
    longestString = listOfStrings[i];
    console.log('The longest string so far is:', longestString);
  }
}
console.log('The longest string is:', longestString);

console.log();

// this loop will print out the shortest string
console.log('PRINTING THE SHORTEST STRING')
let shortestString = listOfStrings[0]; // the reason I set this equal to something hre is because if I did not, the shortest string will always be a string with ntohing in it.
for (let i = 0 ; i < listOfStrings.length; i++) {
  if (listOfStrings[i].length < shortestString.length) {
    shortestString = listOfStrings[i];
    console.log('The shortest string so far is:', shortestString);
  }
}
console.log('The shortest string is:', shortestString);

console.log();

// this loop will print out all the strings longer than 3 characters
console.log('PRINTING THE STRINGS LONGER THAN 3 CHARS')
for (let i = 0 ; i < listOfStrings.length; i++) {
  if (listOfStrings[i].length > 3){
    console.log('This string is longer than 3 chars:', listOfStrings[i]);
  }
}

console.log();

// this function will print out all the strings longer than minLength
console.log('PRINTING THE STRINGS LONGER THAN MINLENGTH')
function longerThanMin(array, minLength) {
  console.log('The length strings have to be greater than is:', minLength);
  for (let i = 0 ; i < array.length; i++) {
    if (array[i].length > minLength){
      console.log('This string is longer than minLength:', array[i]);
    }
  }
}

// test
longerThanMin(listOfStrings, 5);

console.log();

// this loop with print out all strings that start with the letter A
for (let i = 0 ; i < listOfStrings.length; i++) {
  console.log('The first letter of', listOfStrings[i], 'is', listOfStrings[i][0]);
  if (listOfStrings[i][0].toUpperCase() === 'A'){
    // the reason I did [i] and [0] because I want to access the element at i and the first index of that element
    // the reason I did toUpperCase() was so that words that start with lower case 'a' will also work
    console.log('This string starts with the letter a:', listOfStrings[i]);
  }
}

console.log();

// this loop will determine if an array contains the string 'needle'
for (let i = 0 ; i < listOfStrings.length; i++) {
  if (listOfStrings[i] === 'needle'){
    console.log('found it!');
  }
}
console.log('sorry there is no needle, check another haystack');
