let coolObject = {
  fruit: '2',
  animal: '10',
  car: '21',
  name: '9',
  color: '15',
};

let coolObjectKeys = Object.keys(coolObject);
console.log('Here is what coolObjectKeys contain:', coolObjectKeys);
let coolObjectValues = Object.values(coolObject);
console.log('Here is what coolObjectValues contain:', coolObjectValues);
console.log();

coolObjectKeys.sort()
console.log('THIS IS THE OBJECT PRINTED FROM A-Z:')
console.log('This is what coolObjectKeys look like when it is sorted:', coolObjectKeys);
for (let i = 0; i < coolObjectKeys.length; i++) {
  console.log(i+1, 'The key is:', coolObjectKeys[i]);
  console.log(i+1, 'The value assigned to the key is:', coolObjectValues[i]);
}

console.log();
console.log('THIS IS THE OBJECT PRINTED FROM Z-A:')
coolObjectKeys.sort().reverse();
console.log('This is what coolObjectKeys look like when it is sorted:', coolObjectKeys);
for (let i = 0; i < coolObjectKeys.length; i++) {
  console.log(i+1, 'The key is:', coolObjectKeys[i]);
  console.log(i+1, 'The value assigned to the key is:', coolObjectValues[i]);
}
