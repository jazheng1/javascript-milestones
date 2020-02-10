function printSpecificCharacter(string) {
  let waffles = string;
  console.log('The word is', waffles);
  console.log('The first letter of the word is', waffles[0]);
  console.log('The second letter of the word is', waffles[1]);
  console.log('The first letter of the word is', waffles[waffles.length-1]); //waffles.length-1 will give you the number at the last index
  console.log('The last index number is', waffles.length-1)
}

let test = printSpecificCharacter('paper');
console.log();

test = printSpecificCharacter('');
console.log();

test = printSpecificCharacter('Someday');
