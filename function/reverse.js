function reverseArray(array) {
  let reversedArray = [];
  // there are other ways to do the loop, like you can start from the back fo the array and go down
  for (let i = 0; i < array.length; i++) {
    console.log(`This is the element that is being pushed into the new array: ${array[array.length - (i + 1)]}`);
    // I did array.length - (i + 1) to have it push the last element
    reversedArray.push(array[array.length - (i + 1)]);
  }
  console.log(reversedArray);
  return reversedArray;
}

// test

console.log(`The reversed array is: ${reverseArray([1, 2, 3, 4, 5])}`);
