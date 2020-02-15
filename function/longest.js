let longer = require('./longer.js')

// a function that will take in an array of strings and return the longest one in the whole array
function longest(array) {
  let longestWord = '';
  for (let i = 1; i < array.length; i += 2) {
    console.log(); // there is no significance to this, I just added this here so it is easier to see the console.log() statements on the terminal
    if (longestWord.length < longer(array[i], array[i+1]).length){
      longestWord = longer(array[i], array[i+1]);
      console.log('The longestWord so far is:', longestWord);
   }
   console.log();
   console.log(`The longest word in the array is: ${longestWord}`);
   return longestWord;
 }
}

// test
longest(['one', 'two', 'three', 'five']);
