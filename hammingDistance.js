
// ArrayCha11enge (strArr) take the
// array of strings stored in strArr, which will only contain two
// strings of equal length and return the Hamming distance
// between them. The Hamming distance is the number of
// positions where the corresponding characters are different.
// For example: if strArr is ["coder", "codecl then your
// program should return 1. The string will always be of equal
// length and will only contain lowercase characters from the
// alphabet and numbers.

function arrayChallenge(strArr) {
  // Ensure the input array has exactly two strings of the same length
  if (strArr.length !== 2 || strArr[0].length !== strArr[1].length) {
    return 'Input must contain two strings of the same length';
  }

  const [str1, str2] = strArr;
  let hammingDistance = 0;

  // Calculate the Hamming distance
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      hammingDistance++;
    }
  }

  return hammingDistance;
}

// Test examples
console.log(arrayChallenge(["10011", "10100"]));  // Output: 3
console.log(arrayChallenge(["helloworld", "worldhello"]));  // Output: 8