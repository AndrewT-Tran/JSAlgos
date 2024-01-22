// Write a function initials(name) that accepts a full name as an arg.
// The function should return the initials for that name.

let initials = function (name) {
  let words = name.toUpperCase().split(" "); //breaks up the string into an array of words
  // console.log({ words, name });
  for (let i = 0; i < words.length; i++) {
    //loops through the array of words
    words[i] = words[i][0]; //takes the first letter of each word
    // console.log(words)
  }
  return words.join(""); //joins the letters to make initials
};

console.log(initials("anna paschall")); // 'AP'
console.log(initials("Mary La Grange")); // 'MLG'
console.log(initials("brian crawford scott")); // 'BCS'
console.log(initials("Benicio Monserrate Rafael del Toro Sánchez")); // 'BMRDTS'
