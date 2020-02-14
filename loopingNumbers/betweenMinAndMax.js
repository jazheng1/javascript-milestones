let min = 20;
let max = 37;

console.log('The min is:', min);
console.log('The max is:', max);
console.log('Here are the numbers in between:');
for (let i = min; i <= max; i++) {
  console.log(i);
}

console.log();
console.log('Now I will print out every even number between the min and max:');

for (let i = min; i <= max; i +=2) {
  // you might of noticed how I used the variable 'i' again and there is no error. That is because of the 'let' in front which declared the variable again.
  console.log(i);
}
