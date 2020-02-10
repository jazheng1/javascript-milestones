// demonstration of '+' symbol
let num1 = 10;
let num2 = -2;
console.log('num1 is ' + num1);
console.log('num2 is ' + num2);
console.log('the sum of num1 + num2 is ' + num1 + num2);
console.log(); // an empty console.log() is equivalent to pressing the enter key when typing. Also, there other methods to do the same thing.

// demonstration of '-' symbol with new numbers
// because I have declared num1 and num2 with 'let', I can change them by doing the follow:
num1 = -10;
num2 = -30;
console.log('num1 is ' + num1);
console.log('num2 is ' + num2);
console.log('the difference of num1 - num2 is', num1 - num2);
// notice how the use of '+' or ',' both works to combine two things together in console.log().
console.log();

// demonstration of '*' symbol
num1 = 10;
num2 = -7;
console.log('num1 is ' + num1);
console.log('num2 is ' + num2);
console.log('the product of num1 * num2 is', num1 * num2);
console.log();

// demonstration of '/' symbol
num1 = -10;
num2 = -30;
console.log('num1 is ' + num1);
console.log('num2 is ' + num2);
console.log('the dividend of num1 / num2 is', num1 / num2);
console.log();

// demonstration of '%' symbol
num1 = 2;
num2 = 30;
console.log('num1 is ' + num1);
console.log('num2 is ' + num2);
console.log('the remainder of num1 / by num2 is', num1 % num2);
console.log();

// demonstration of '**' symbol
num1 = 1000;
num2 = 0;
console.log('num1 is ' + num1);
console.log('num2 is ' + num2);
console.log('num1 raised to the power of num2 is', num1 ** num2);
console.log();

// demonstration of 'Math.floor()' function
/** when you divide you will always end up with a decimal if it is not an even divison,
so Math.floor() will help you get a whole number without the decimals.
for example: 1/3 = 0.03 and the function will change it to 0
*/
num1 = 1;
num2 = 3;
console.log('num1 is ' + num1);
console.log('num2 is ' + num2);
console.log('Math.floor() of num1 / by num2 is', Math.floor(num1 / num2));
console.log();
