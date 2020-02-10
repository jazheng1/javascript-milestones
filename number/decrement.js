
function decrement(num) {
  let blah = num;
  console.log('RESET BLAH:', blah);
  blah--;
  console.log('1. blah -1 =', blah);
  blah = num; //resets blah to original blah
  console.log('RESET BLAH:', blah);
  blah -= 2;
  console.log('2. blah -2 =', blah);
  blah = num; //resets blah to original blah
  console.log('RESET BLAH:', blah);
  blah -= 10;
  console.log('3. blah -10 =', blah);
  blah = num; //resets blah to original blah
}

console.log('TEST 1');
let test = decrement(42);
console.log();

console.log('TEST 2');
test = decrement(0);
console.log();
