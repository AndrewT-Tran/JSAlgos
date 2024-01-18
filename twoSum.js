// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

var twoSum = function (nums, target) {
	//iterates thru the length of nums
	for (let i = 0; i < nums.length - 1; i++) {
		//iterates thru the length of nums at index one ahead
		for (let j = i + 1; j < nums.length; j++) {
			// checks if the sum is eqaul to target
			if (nums[i] + nums[j] === target) {
				console.log(`the sum of ${nums[i]} and ${nums[j]} is ${nums[i] + nums[j]}`)
				return [i, j];
			}
		}
	}
};
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([2, 7, 3, 5, 7, 15], 12))