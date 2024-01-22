// Write a function tripler(nums) that takes in an array as an arg. The function should return a new array containing three times every number of the original array.

//using arr.map
// let tripler = (arr) => {
//   return arr.map((el) => el * 3);
// };

let tripler = function (nums) {
    let newNums = []; //creates an empty array to store vlaues
    for (let i = 0; i < nums.length; i++) { //iterates thru
        let num = nums[i];//reassigns so you can multiple 3 over each index
        newNums.push(num * 3); //pushes new values into the created empty array
    }

    return newNums;
};


console.log(tripler([2, 7, 4])); // [ 6, 21, 12 ]
console.log(tripler([-5, 10, 0, 11])); // [ -15, 30, 0, 33 ]
