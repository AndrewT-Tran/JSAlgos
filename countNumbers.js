function countNumbers(arr) {
	const counts = [];

	for (let i = 0; i < arr.length; i++) {
		let count = 0;

		for (let j = arr[i][0]; j <= arr[i][1]; j++) {
			if (hasNoRepeatingDigits(j)) {
				count++;
			}
		}

		counts.push(count);
	}

	return counts;
}

function hasNoRepeatingDigits(num) {
	const digits = new Set();

	while (num > 0) {
		const digit = num % 10;
		if (digits.has(digit)) {
			return false;
		}
		digits.add(digit);
		num = Math.floor(num / 10);
	}

	return true;
}

// Example usage
console.log(
	countNumbers([
		[1, 20],
		[9, 19],
	])
); // Test with a single range.
console.log(
	countNumbers([
		[1, 20],
		[30, 50],
		[100, 110],
	])
); // Test with multiple ranges.
console.log(countNumbers([[0, 9]])); // Test with single-digit numbers.
console.log(countNumbers([[100, 200]])); // Test with a range of multi-digit numbers.
console.log(countNumbers([[123, 123]])); // Test with a range of a single number.
console.log(countNumbers([[400, 400]])); // Test with a range of a single number that doesn't meet criteria.
