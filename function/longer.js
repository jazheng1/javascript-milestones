// function that will take in two strings and return the longest of the two
function longer(string1, string2) {
  console.log(`The first string is: ${string1}`);
  console.log(`The second string is: ${string2}`);
  let longWord = '';
  if (string1.length > string2.length) {
    console.log('String 1 is longer');
    longWord = string1;
  } else {
    console.log('String 2 is longer');
    longWord = string2;
  }
  return longWord;
}

// test
// longer('one', 'tree');

module.exports = longer;
