function add(num1, num2) {
  console.log(`The first number is ${num1}`);
  console.log(`The second number is ${num2}`);
  return num1 + num2;
}

// tests:
// let tests = add(3, 4);
// console.log('The sum of num1 and num2 is:', tests);

module.exports = add;
