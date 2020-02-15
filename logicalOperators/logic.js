let num1 = 10;
console.log(`The first number is ${num1}`);
let num2 = 16;
console.log(`The second number is ${num2}`);

if (num1 % 2 === 0 && num2 % 2 === 0) {
  // && in javascript means AND
  // only evaluates true if both are true, otherwise it will always evaluate false
  console.log('THEY ARE BOTH EVEN!');
} else if(num1 % 2 !== 0 && num2 % 2 !== 0) {
  // ! in javascript mean NOT
  console.log('THEY ARE BOTH NOT EVEN ;(');
} else if(num1 % 2 === 0 || num2 % 2 === 0) {
  // || in javascript means OR
  // will only evaluate false if both are false, otherwise it will always evaluate true
  console.log('ONE OF THEM IS EVEN');
}
