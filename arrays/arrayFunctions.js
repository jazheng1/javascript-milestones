// this file will contain the use of some of javascripts built-in array functions

console.log('THE PUSH FUNCTION');
let coolArray = [1, 2, 3, 4, 5];
console.log('This is how coolArray looks like:', coolArray);
coolArray.push(6); // the javascript function push() will add a new element to the end of an array
console.log('coolArray with a new element at the end:', coolArray);
coolArray.push(7, 8);
console.log('You can even add more than one thing to the end of an array using the push() function:', coolArray);
console.log();

console.log('THE POP FUNCTION');
console.log('The previous array will be used:', coolArray);
coolArray.pop(); // the pop() function will remove the last element of an array
// to see the change you will have to reprint the array
console.log('Notice how the eight is gone?', coolArray);
console.log();

console.log('THE UNSHIFT FUNCTION');
console.log('We will use the previous array', coolArray);
coolArray.unshift(0); // the unshift() function will add an element to the beginning of an array
console.log('Notice how the first element is now different?', coolArray);
console.log();

console.log('THE SHIFT FUNCTION');
console.log('The array being used:', coolArray);
coolArray.shift();
console.log('You guessed it, this function does the opposite of teh unshift() function:', coolArray);
