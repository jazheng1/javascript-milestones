// this file will show how to change the value of an array at an index
let coolArray = ['a', 'b', 'c', 'd', 'e'];
console.log('This is what coolArray looks like', coolArray);
/**
 * you do NOT have to use 'let' again because the variable is already declared,
 * and the computer knows what 'coolArray' is when you just call it like below
 */
coolArray[0] = 'z';
console.log('This is how coolArray now looks with a new value at index zero:', coolArray);

coolArray[1] = 'y';
console.log('This is how coolArray now looks with a new value at index one:', coolArray);

console.log('Notice how the change is permanent?');
