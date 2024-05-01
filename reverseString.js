// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */


var reverseString = function(s) {
  let left = 0; // Pointer to the start of the array
  let right = s.length - 1; // Pointer to the end of the array

  while (left < right) {
    // Swap characters at left and right pointers
    let temp = s[left];
    s[left] = s[right];
    s[right] = temp;

    // Move the pointers towards the center
    left++;
    right--;
  }

  return s.join(''); // Convert array back to string
};

console.log(reverseString(["h", "e", "l", "l", "o"]));