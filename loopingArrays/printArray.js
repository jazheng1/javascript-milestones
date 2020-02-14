let coolArray = [1, 2, 3, 4, 5];

// this will print every element of coolArray
for (let i = 0; i < coolArray.length; i++) {
  console.log('The element at index', i, 'is:', coolArray[i]);
}

console.log();

// this will print ever other element of coolArray
for (let i = 0; i < coolArray.length; i += 2) {
  // do YOU notice how the syntax is different from the loop above??
  console.log('The element at index', i, 'is:', coolArray[i]);
}

console.log();

// this will print the elements in coolArray, but in REVERSE
for (let i = coolArray.length-1; i >= 0; i--) {
  console.log('The element at index', i, 'is:', coolArray[i]);
}
