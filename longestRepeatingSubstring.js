// Given a string S, find out the length of the longest repeating substring(s). Return 0 if no repeating substring exists.

// Example 1:

// Input: "abcd" Output: 0 Explanation: There is no repeating substring. Example 2:

// Input: "abbaba" Output: 2 Explanation: The longest repeating substrings are "ab" and "ba", each of which occurs twice. Example 3:

// Input: "aabcaabdaab" Output: 3 Explanation: The longest repeating substring is "aab", which occurs 3 times. Example 4:

// Input: "aaaaa" Output: 4 Explanation: The longest repeating substring is "aaaa", which occurs twice.

// Note:

// The string S consists of only lowercase English letters from 'a' - 'z'. 1 <= S.length <= 1500

// "abcd" "abbaba" "aabcaabdaab" "aaaaa"

function longestRepeatingSubstring(S) {
  const n = S.length;
  let ans = 0; // keeps track of teh longest repeating substring

  // dp[i][j] := the length of the longest repeating substring ending at i and j
  const dp = new Array(n + 1).fill(0).map(() => new Array(n + 1).fill(0));
  
  for (let i = 1; i <= n; i++) {
    for (let j = i + 1; j <= n; j++) {
      if (S[i - 1] === S[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
        ans = Math.max(ans, dp[i][j]);
      }
    }
  }

  return ans;
}

// Test cases
// console.log(longestRepeatingSubstring("abcd")); // Output: 0
// console.log(longestRepeatingSubstring("abbaba")); // Output: 2
// console.log(longestRepeatingSubstring("aabcaabdaab")); // Output: 3
console.log(longestRepeatingSubstring("aaaaa")); // Output: 4
