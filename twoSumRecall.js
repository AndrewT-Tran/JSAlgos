// Write a function twoSum(arr, target) that accepts an array and a target number as args. The function should a return a boolean indicating if two distinct numbers of the array add up to the target value. You can assume that input array contains only unique numbers.

let twoSum = function (arr, target) {
  for (let i = 0; i < arr.length; i++) {
    let num1 = arr[i]; //iterates through the array

    for (let j = i + 1; j < arr.length; j++) {
      let num2 = arr[j]; //iterates through the array for a second time 1 ahead
      if (num1 + num2 === target) {
        //checks which two numbers add up to the target
        console.log({ num1, num2, target });
        return true;
      }
    }
  }
  return false;
};

console.log(twoSum([1, 7, 3, 0, 2], 5)); // true
console.log(twoSum([1, 7, 3, 0, 2], 6)); // false
console.log(twoSum([4, 6, 2, 3], 8)); // true
console.log(twoSum([4, 6, 2, 3], 11)); // false
