function letterCounts(string) {
  let letterCountObject = {};
  for (let letter of string) {
    if (letterCountObject.hasOwnProperty(letter)) {
      console.log(`Here is how the letterCountObject looks so far: ${JSON.stringify(letterCountObject)}`);
      letterCountObject[letter] = letterCountObject[letter] + 1;
    } else {
      console.log(`A new letter is being added: ${letter}`);
      letterCountObject[letter] = 1;
    }
  }
  console.log(`The object looks like this: ${JSON.stringify(letterCountObject)}`); // the reason I did the whole JSON thing, instead of just printing out the variable is because it will print [object Object]
  // source: https://stackoverflow.com/questions/957537/how-can-i-display-a-javascript-object
  return letterCountObject;
}

console.log(letterCounts('avassas'));
