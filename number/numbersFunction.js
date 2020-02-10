function rightMostDigit(num) {
  let blah  = num;
  console.log('1. This is what blah is:', blah);
  console.log('2. The right most number of blah is', blah % 10);
  return blah % 10;
}

//tests to see if the function works

console.log('TEST 1');
let test = rightMostDigit(109);
console.log('3. The right most number here is 9;', test === 9);
console.log();

console.log('TEST 2');
test = rightMostDigit(1);
console.log('3. The right most number here is 1;', test === 1);
console.log();

console.log('TEST 3');
test = rightMostDigit(0);
console.log('3. The right most number here is 0;', test === 0);
console.log();

console.log('TEST 4');
test = rightMostDigit(109012308);
console.log('3. The right most number here is 8;', test === 8);
