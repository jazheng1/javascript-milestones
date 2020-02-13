let number = 2910;
console.log('The number is:', number);
console.log();

console.log('The number in string format:', number.toString());
console.log('Is it actually a string?', typeof number.toString() === 'string');
console.log();

// the toString() function does not return anything, so you cannot do this:
number.toString();
console.log('Notice how the word is now yellow? What does this mean?', number);
console.log('Is it a number or a string?', typeof number);
// this proves the comment above, so in order to make a number a string, you will have to do it in the same step.
