/*

Flip every pair of characters in a string.

input: string
output: string, with each sequential pair of characters swapped in the order
roughly: we go in order, two by two, traversing the array and switch the two characters

Example:
var input = 'check out how interesting this problem is, it\'s insanely interesting!';
var output = flipPairs(input);
console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!
*/

var input = 'check out how interesting this problem is, it\'s insanely interesting!';
var output = flipPairs(input);
console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!


function flipPairs(string) {
    // split our string into an array, set it equal to the array
    string = string.split("");

    // traverse the array, by the even numbers, initializing with 0, going up by two each time
    for (let i = 0; i < string.length; i += 2){
    // set the even numbered character to a temporary variable
      let temp = string[i];
    // set the next-index (odd) to the current (even) index
      string[i] = string[i+1];
    // set the odd index to the value stored in the temporary variable
      string[i+1] = temp;
    }
    // reassemble the array, back into a string
      string = string.join("");
    // return the string
      return string;

}