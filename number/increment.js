function increment(num){
  let blah = num;
  console.log('RESET BLAH:', blah);
  blah++;
  console.log('1. blah +1 =', blah);
  blah = num; //resets blah to original blah
  console.log('RESET BLAH:', blah);
  blah += 2;
  console.log('2. blah +2 =', blah);
  blah = num; //resets blah to original blah
  console.log('RESET BLAH:', blah);
  blah += 10;
  console.log('3. blah +10 =', blah);
  blah = num; //resets blah to original blah
}

console.log('TEST 1');
let test = increment(1);
console.log();

console.log('TEST 2');
test = increment(0);
console.log();
