// Longest Word
// Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. Words may also contain numbers, for example "Hello world123 567"

// this is incorrect because it does not include numbers
// function LongestWord(sen) {
//   let arr = sen.match(/[a-z]+/gi)

  
//   var sorted = arr.sort(function(a, b) {
//     return b.length - a.length;
//   });

//   // this array now contains all the words in the original
//   // string but in order from longest to shortest length
//   // so we simply return the first element
//   return sorted[0];
         
// }
   




// corrected

// function LongestWord(sen) {
//   let arr = sen.match(/[a-zA-Z0-9]+/g); // Match words containing letters and/or numbers

//   var sorted = arr.sort(function(a, b) {
//     return b.length - a.length;
//   });

//   // Return the first element, which is the longest word
//   return sorted[0];
// }

// console.log(LongestWord("Hello world123 567")); // "world123"


function LongestWord(sen) {

  sen = sen.trim();
  console.log(sen)
  sen = sen.replace(/[^a-zA-Z0-9 ]/g, '');
  
  let longest = ""

  var arr = sen.split(" ").forEach(word => {
      if(word.length > longest.length) longest = word;
  })

  return longest;

}
   
// keep this function call here 
// LongestWord(readline());

console.log(LongestWord("123456789 98765432")) //123456789
console.log(LongestWord("Hello world123 567")); // "world123"