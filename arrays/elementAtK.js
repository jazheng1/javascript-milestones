/**
 * this function will be expecting an array and a number (this number will be the index)
 * the function would not know what to do with these parameters, so it is up to the developer to decide for it
 * */
function elementAtK(coolArray, k) {
  console.log('This is the array:', coolArray);
  console.log('The target index(k) is:', k);
  console.log('The element at index k of coolArray is:', coolArray[k]);
  return coolArray[k];
}

// tests
let test = elementAtK([1, 2, 3, 4, 5], 2);

/**
 * this line will only print out the return statement because the result of the function 'elementAtK' is
 * stored here
 * */
console.log(test);
