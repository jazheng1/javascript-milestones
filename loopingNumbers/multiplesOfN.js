function multiples(n , k) {
  // n refers to the number you want multiples of
  // k refers to the amount of multiples you want
  console.log("Your number is:", n);
  console.log('You want the', k, 'multiple');
  for (let i = 1; i <= k; i++) {
    let number = n;
    number *= i;
    console.log('The', i, 'multiple of', n, 'is:', number);
  }
}

// tests
let test = multiples(2, 15);
