let fs = require('fs'); // this is similar to process or readlineSync, just another module

console.log('READ FILE FUNCTION');
// this function reads the inputed file.
function readFile(file_dr) {
  let text = fs.readFileSync(file_dr, 'utf-8');
  return text;
}

//test
console.log('The text from data.txt is:', '\n', readFile('./data.txt'));
console.log();

console.log('FILE TO ARRAY FUNCTION');
//this function will store each line in an array
function storeLineInArray(file_dr) {
  let text = fs.readFileSync(file_dr, 'utf-8');
  let lineArray = [];
  lineArray = text.split('\n'); // this will split the text whenver a new line occurs and pushes everything before then to an array
  return lineArray;
}

// test
console.log('The text in array format from data.txt is:', storeLineInArray('./data.txt'));
console.log();

console.log('FINDING LONGEST LINE IN FILE');
function findLongest(array) {
  let longestIndex  = 0;
  for (let i = 1; i < array.length; i++) { // this will loop through the array that was created in the previous function
    if(array[longestIndex].length < array[i].length) {
      longestIndex = i;
      console.log(`The index with the longest line is: ${longestIndex}`);
      console.log('The longest line so far is:', array[longestIndex]);
      console.log();
    }
  }
  return array[longestIndex];
}

// test
console.log('The longest line from data.txt is:', findLongest(storeLineInArray('./data.txt')));
console.log();

console.log('FINDING SHORTEST LINE IN FILE');
function findShortest(array) {
  let shortestIndex  = 0;
  for (let i = 1; i < array.length-1; i++) {
    // I did array.length-1 here because there is a problem where the last item of the array is '', so it will return that if I do not do the -1
    if(array[shortestIndex].length > array[i].length) {
      shortestIndex = i;
      console.log(`The index with the shortest line is: ${shortestIndex}`);
      console.log('The shortest line so far is:', array[shortestIndex]);
      console.log();
    }
  }
  return array[shortestIndex];
}

// test
console.log('The shortest line from data.txt is:', findShortest(storeLineInArray('./data.txt')));
console.log();
