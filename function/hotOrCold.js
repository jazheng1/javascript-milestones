function hotOrCold(num) {
  console.log(`The number is ${num}`);
  if (num > 100) {
    return 'HOT';
  } else if (num === 100) {
    return 'CORRECT';
  } else {
    return 'COLD';
  }
}

//tests
let test = hotOrCold(100);
console.log(test);
// the reason I have console.log statements after because the function only returns and not print, so nothing will be printed if I do not have this

test = hotOrCold(-10);
console.log(test);

test = hotOrCold(190);
console.log(test);
