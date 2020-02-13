function changeElementAtK(coolArray, k) {
  console.log('This is how coolArray looks like:', coolArray);
  console.log('This is what the number k is:', k);
  coolArray[k] = 'new';
  console.log('The updated coolArray:', coolArray);
}

// tests
let test = changeElementAtK([1, 2, 3, 4, 5], 3);

console.log();
console.log('Notice how you can put in a word in an array of numbers');
