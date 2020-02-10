//this function will increment a number by whatever you want it to increment by.
function incrementByX(num, x) {
console.log('The number:', num);
num += x; // this expression is equivalent to num = num + x
console.log('The increment:', x);
console.log('Num plus the increment value =', num);
return num;
}

console.log('TEST 1');
let test = incrementByX(1, 10);
console.log();

console.log('TEST 2');
test = incrementByX(10, -20);
