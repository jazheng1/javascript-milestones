//this function will increment a number by whatever you want it to increment by.
function decrementByX(num, x) {
  console.log('The number:', num);
  num -= x; // this expression is equivalent to num = num - x
  console.log('The decrement:', x);
  console.log('Num plus the decrement value =', num);
  return num;
  }

  console.log('TEST 1');
  let test = decrementByX(100, 32);
  console.log();

  console.log('TEST 2');
  test = decrementByX(0, -20);
