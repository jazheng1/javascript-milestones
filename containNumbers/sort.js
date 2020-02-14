let coolArray = [100, 1, -21, 20, 43, -120, 15];
console.log('Here is how coolArray looks like:', coolArray);

// if you just do coolArray.sort(), you will run into a problem where 1 will be followed by 100
// so to mitigate this problem you have to do it in a specific way as shown:
coolArray.sort((a, b) => a-b);
console.log('Here is the coolArray sorted from smallest to largest:', coolArray);

coolArray.sort((a,b) => b-a);
console.log('Here is the coolArry sorted from greatest to least:', coolArray);
