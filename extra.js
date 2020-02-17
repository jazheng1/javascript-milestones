function papaya(meow) {
  let x = meow[0];
  // returns largest number in array
  for (let zork = 0; zork < meow.length; zork++) {
    let potato = meow[zork];

    if (potato > x) {
      x = potato;
    }
  }

  return x;
}

console.log('1', papaya([10, -10, 40, 50, 108, 17]))


function clowntown(octopus) {
  // does the absolute value of a number
  if (octopus < 0) {
    return -1 * octopus;
  } else {
    return octopus;
  }
}

console.log('clowntown(20) is:', clowntown(20));
console.log('clowntown(-20) is:', clowntown(-20));
console.log('clowntown(0) is:', clowntown(0));
console.log('clowntown(-108) is:', clowntown(-108));


function chowhound(llama) {
  // print llama array in reverse
  let razzleDazzle = [];

  for (let qq = 1; qq <= llama.length; qq++) {
    razzleDazzle.push(llama[llama.length - qq]);
  }

  return razzleDazzle;
}

console.log(chowhound(['A', 'B', 'C', 'D', 'E', 'F']));
