// Write a function avgVal(arr) that accepts an array as an arg. The function should return the average of all values in the array. If the array is empty, it should return null.

let avgVal = function (arr) {
  if (arr.length === 0) {
    return null;
  } else {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    let average = sum / arr.length;
    return average.toFixed(2);
  }
};
console.log(avgVal([5,10]))// "7.50"
console.log(avgVal([])) // null
console.log(avgVal([10,45,4,2,5,6,645])) // "103.00"
