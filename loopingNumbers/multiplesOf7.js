// this loop will give you the first 10 multiples of 7

for (let i = 1; i <= 10; i++) {
  let number = 7;
  number *= i;
  console.log('The', i, 'multiple of seven is:', number);
}

console.log();

// this function will allow you to choose how many multiples of 7 you want
function multipleOf7(k) {
  // do you see what is different between this and for loop and the previous one?
  console.log('So you want', k, 'multiples of 7');
  for (let i = 1; i <= k; i++) {
    let number = 7;
    number *= i;
    console.log('The', i, 'multiple of seven is:', number);
  }
}
// if you did no spot the difference, all I did was change 'i <= 10' to i <= k'

// function tests
console.log('A TEST TO SEE IF FUNCTION WORKS:')
let test = multipleOf7(12);
