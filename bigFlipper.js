// Flip every chunk of n characters in a string, where n is any positive integer greater than 1.

// Note that this is intentionally very similar to the previous problem.

// Please focus on getting a working solution with the tools you know well.

// Practice the interactive / collaborative interview style that's described in the documentation.

// Example:
// var input = 'a short example';
// var output = flipEveryNChars(input, 5);
// console.log(output); // --> ohs axe trelpma

// Breaking this example down piece by piece:
// 'a sho' -> 'ohs a'
// 'rt ex' -> 'xe tr'
// 'ample' -> 'elpma'

//     -> 'ohs axe trelpma'

function flipEveryNChars(string, number){
  // Split the string into an array to traverse the array
    string = string.split("");

  // Traverse the array;
  for (let i = 0; i < Math.floor(number / 2); i++){
    let temp = string[i];
    let latterChar = number - i - 1;
    string[i] = string[latterChar];
    string[latterChar] = temp;
  }
  string = string.join("");
  return string;
  // Switch the characters, based on index, subtracting from the number; 

  // Join the array back to string
  // Return the string
};

console.log(flipEveryNChars('Hello, My Name is Andrew', 20))
