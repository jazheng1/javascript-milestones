function isChicagoPhoneNumber(array) {
  console.log('This is the array of numbers', array);
  let areaCode = ''; // I knew to do this because I want to store the areaCode somewhere for me to compare
  // because it is an array of many strings in it, I knew to use two loops
  for (let i = 0; i < array.length; i++) { // first loop goes trough each item in the array
    for (let j = 0; j < 3; j++) { // second loop goes through the first 3 elements of the string at array[i]
      areaCode += array[i][j];
    }
    console.log(`This is the areaCode for the first number ${array[i]}: ${areaCode}`);
    if (areaCode === '773' || areaCode === '312' || areaCode === '872') {
      return true;
    }
    areaCode = ''; // resets the area code if that string does not contain it
  }
  return false;
}

// tests
console.log(`Does this list of arrays contain a Chicago number? ${isChicagoPhoneNumber(['954-231-4152', '213-231-4637', '773-312-8726'])}`);
