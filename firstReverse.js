// Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. For example: if the input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH.
/**

Input: "coderbyte"
Output: etybredoc

Input: "I Love Code"
Output: edoC evoL I
*/

function FirstReverse(str) {
    // Split the string into an array of characters
    var arr = str.split('');

    // Reverse the array
    arr.reverse();

    // Join the array back into a string
    var reversedStr = arr.join('');

    return reversedStr;
}

// Test the function
console.log(FirstReverse("Hello World and Coders"));
