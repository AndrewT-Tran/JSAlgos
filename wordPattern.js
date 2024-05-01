// Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.



// Example 1:

// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true
// Example 2:

// Input: pattern = "abba", s = "dog cat cat fish"
// Output: false
// Example 3:

// Input: pattern = "aaaa", s = "dog cat cat dog"
// Output: false

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    const words = s.split(' '); // here we are spliting the string into words and putting into array
    if (pattern.length !== words.length) return false; // if the pattern has is more than teh amount of words, it will be false
    const obj = {};

    for (let i = 0; i < words.length; i++) {
        if ((obj[pattern[i]] && obj[pattern[i]] !== words[i])) {
            // checks if char in pattern has been mapped to different word in obj
            return false;
        }
        console.log(obj)
        obj[pattern[i]] = words[i]; // adds new entry for word and maps char to the current word
    }
    // check if there are any duplicate values in the obj
    console.log("size of obj ", Object.values(obj).length)
    // create a set from values in the obj
    // a set can only contain unique values 
    // so if there are any duplicates, the size of the Set will be less than the number of values in the obj.
    // if there are no duplicates, this means the pattern is consistent.
    let test = new Set(Object.values(obj)).size
    console.log("size of new Set", test)
    // return new Set(Object.values(obj)).size === Object.values(obj).length;
    return test === Object.values(obj).length
}

console.log(wordPattern("ABBA", "dog cat cat dog")); // true

// console.log(wordPattern("ABBA", "Dog cat cat Dig")); // false 