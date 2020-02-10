function printCharacterAtK(string, k) {
  let waffles = string;
  console.log('The word is', waffles);
  console.log('The specific index is', k)
  console.log('The character at k is',waffles[k]);
}

let test = printCharacterAtK('tree', 2);
console.log();

test = printCharacterAtK('Peanut', 4);
