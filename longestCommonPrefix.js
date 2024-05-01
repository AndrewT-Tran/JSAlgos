/**
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.
*/

/**
 * @param {string[]} strs
 * @return {string}
 */

// var longestCommonPrefix = function (strs) {
//   strs.sort();
//   // sort the array of strings alphabetically
//   // this way the common prefix is the first and last string
//   // smallest string is first
//   // largest string is last
//   console.log(strs);
//   for (let i = 0; i < strs[0].length; i++) {
//     // iterate through the first string
//     // compare the character of first string to the character last string
//     // console.log("smallest string ", strs[0][i]);
//     // console.log("largest string ", strs[strs.length - 1][i]);
//     if (strs[0][i] !== strs[strs.length - 1][i])
//       // if the char are not the same, the current prefix is not common to all strings
//       return strs[0].substring(0, i);
//     // return the substring of the first string from up to but not including teh current char, which is the longest common prefix
//   }
//   // if loop completes with no char that is not common to all strings, the first string is the longest common prefix
//   return strs[0];
// };



var longestCommonPrefix = function (strs) {
    // checks if the array is empty
    if (strs.length === 0) {
        return "";
    }


    var prefix = strs[0];
    // console.log(prefix);
    // loops through the array
    for (var i = 1; i < strs.length; i++) {
        // checks if the prefix is at the beginning of the string
        while (strs[i].indexOf(prefix) !== 0) {
            // if not, it removes the last character from the prefix
            prefix = prefix.substring(0, prefix.length - 1);
            // checks if the prefix is empty
            // console.log(prefix);
            if (prefix === "") {
                return "";
            }
        }
    }

    return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"])); // fl
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // ""
console.log(longestCommonPrefix(["cart", "carmel", "car"])); // car
