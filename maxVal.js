// Write a function maxValue(nums) that takes in an array of numbers as an arg. The function should return the largest number of the array. If the array is empty, the function should return null

let maxValue = function (nums) {
  let max = null;
  //per question
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    //reassigns the variable
    if (max === null || num > max) {
      // if max empty or num is larger than max
      //set max to num and return it if no other num larger
      max = num;
    }
  }

  return max;
};

console.log(maxValue([4, 6, 3, 5, 42, 4])); // 42
console.log(maxValue([-2, -3, -7, 3])); // 3
console.log(maxValue([])); // null
