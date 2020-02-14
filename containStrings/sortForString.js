let listOfStrings = ['a', 'c', 'd', 'z', 'y', 'w', 'g'];

// for strings you will not run into the problem where 10 will be greater than 2
listOfStrings.sort();
console.log('The array in alphabetical order:', listOfStrings);

// because the string is already sorted, I can use reverse() will reverse the order of the array
listOfStrings.reverse();
// this reverse function can alse be used for numbers
console.log('The array in reverse alphabetical order', listOfStrings);
