// Array Sum
// Write a function sumArray(arr) that accepts an array as an arg. The function should return the total sum of all values in the array.

let sumArray = function (arr) {
  let sum = 0; // sets sum to 0
  for (let i = 0; i < arr.length; i++) {
    //iterates through the array
    sum += arr[i];
    // adds the value of the current index to sum
  }
  return sum;
};

console.log(sumArray([4, 3, -1, 10])); // 16
