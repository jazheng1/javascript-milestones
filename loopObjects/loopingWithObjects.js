let coolObject = {
  fruit: '2',
  animal: '10',
  car: '21',
  name: '9',
  color: '15',
};

console.log('METHOD 1');
// I did this because, coolObject does not have a length; it is undefined if you do coolObject.length
// What happenes below is that the keys and values are being turned into arrays which have a length
let coolObjectKeys = Object.keys(coolObject);
console.log('Here is what coolObjectKeys contain:', coolObjectKeys);
let coolObjectValues = Object.values(coolObject);
console.log('Here is what coolObjectValues contain:', coolObjectValues);

// this loop will print out all the keys and values of coolObject, there are other ways to do this loop
console.log();
for (let i = 0; i < coolObjectKeys.length; i++) {
  console.log('The key is:', coolObjectKeys[i]);
  console.log('The value assigned to the key is:', coolObjectValues[i]);
}

console.log()
console.log('METHOD 2')
// this method allows you to run through the object without having to turn the keys and values into arrays
// this for loop will assign all the keys in coolObject to 'keys' as it loops trhough coolObject
for (let keys in coolObject) {
  console.log('The key is:', keys);
  console.log('The value assigned to the key is:', coolObject[keys]);
}
