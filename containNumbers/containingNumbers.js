let listOfNumbers = [20, 0, 1, 5, 10, 13, 100, -10];

// this will print out the largest number
console.log('PRINTING OUT MAX NUMBER');
let maxNumber = listOfNumbers[0]; // I knew to do this because I wanted to store the maxNumber somewhere and I needed a way to compare a number in the array with another number
// the reason I declared this outside is because I do not want maxNumber to reset every time the loop runs
console.log('The maxNumber so far is:', maxNumber);
for (let i = 0 ; i < listOfNumbers.length; i++) {
  if (maxNumber < listOfNumbers[i]) {
    maxNumber = listOfNumbers[i];
    console.log('The new max number is:', maxNumber);
  }
}

console.log();
console.log('PRINTING OUT MIN NUMBER');
// this will print out the smallest number
let minNum = listOfNumbers[0];
console.log('The min number so far is', minNum);
for (let i = 0 ; i < listOfNumbers.length; i++) {
  if (minNum > listOfNumbers[i]) {
    minNum = listOfNumbers[i];
    console.log('The new min number is:', minNum);
  }
}

console.log();
console.log('PRINTING OUT NUMBER GREATER THAN 0')
// this will print our all elements greater than 0
for (let i = 0 ; i < listOfNumbers.length; i++) {
  if (listOfNumbers[i] > 0) {
    console.log('The number is greater than zero:', listOfNumbers[i]);
  }
}

console.log();
console.log('PRINTING OUT ALL ELEMENTS GREATER THAN K');
function greaterThanK(k){
  console.log('This is what k is:', k);
  for (let i = 0 ; i < listOfNumbers.length; i++) {
    if (listOfNumbers[i] > k) {
      console.log('The number is greater than k:', listOfNumbers[i]);
    }
  }
}
greaterThanK(10);

console.log();
console.log('PRINT OUT ALL EVEN ELEMENTS');
for (let i = 0 ; i < listOfNumbers.length; i++) {
  if (listOfNumbers[i] % 2 === 0) {
    console.log('This number is even:', listOfNumbers[i]);
  }
}
