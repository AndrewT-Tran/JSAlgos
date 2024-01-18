// Given an integer x, return true if x is a palindrome, and false otherwise.

var isPalindrome = function (x) {
	let reverse = x.toString().split("").reverse().join("");
	// creates temp string to create reversed string
	console.log("reverse", reverse);
	console.log(`x = `, x);

	return x.toString() === reverse;
};

console.log(isPalindrome(122));
console.log(isPalindrome(121));
