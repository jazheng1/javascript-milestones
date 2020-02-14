// since we want every number between 40 and 60, a loop of any sort will be perfect
console.log('Looping every number between 40 and 60');
for (let i = 40; i <= 60; i++) {
  console.log('The number is:', i);
}

console.log();
console.log('Looping every even number between 40 and 60');

// now if we want to only print even numbers between 40 and 60, we will need a conditional while looping
// or you can just change how 'i' increments
for (let i = 40; i <= 60; i+=2) {
  console.log('The number is:', i);
}
