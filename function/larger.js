function larger(num1, num2) {
  let big = 0;
  console.log(`The first number is ${num1}`);
  console.log(`The second number is  ${num2}`);
  if (num1 > num2) {
    console.log(`The first is greater:`);
    big = num1;
  } else {
    console.log('The second number is greater');
    big = num2;
  }
  console.log('This is the biggest number:', big);
  return big;
}

// test
// console.log(larger(7, 8));

module.exports = larger;
