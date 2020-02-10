function append(string) {
  let waffles = string;
  console.log('the word is', waffles);
  waffles += 'a'; // this will add the the string 'a' to the end of what already exists
  return waffles;
}

let test = append('te');
console.log('The word with a at the end is', test);
console.log();

test = append('applepie');
console.log('The word with a at the end is', test);
