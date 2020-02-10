function evenOrOdd (num) {
  let blah = num;
  console.log('1.', blah);
  if (blah % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
}

console.log('TEST 1');
let test = evenOrOdd(100);
console.log('2. The number is', test);
console.log();

console.log('TEST 2');
test = evenOrOdd(1);
console.log('2. The number is', test);
console.log();

console.log('TEST 3');
test = evenOrOdd(0);
console.log('2. The number is', test);
console.log();

console.log('TEST 4');
test = evenOrOdd(109012308);
console.log('2. The number is', test);
