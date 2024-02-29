
//The sliding window approach is a technique for finding subarrays or substrings that satisfy a given condition. It involves creating a window and moving the window based on certain conditions.//


// "Find the maximum sum of sub-array of size k with the time complexity of O(N).
// an O(N) time complexity means that we need to solve the problem in a single iteration.
// Array = [1, 2, 6, 2, 4, 1], k = 3"

function findMaxSumOfSequence(listOfItems, sequenceLength) {
    if (listOfItems.length < sequenceLength) {
        return null;
    }
    // creates the window
    let start = 0,
        end = 0,
        maxSum = 0,
        windowSum = 0;
    // creates the initial window
    while (end < sequenceLength) {
        windowSum += listOfItems[end];
        end++;
        maxSum = windowSum;
        //creates the sum of first window
    }
    // we will subtract and add the elements to the window to get the sum of the next window
    while (start + sequenceLength < listOfItems.length) {
        windowSum = windowSum - listOfItems[start] + listOfItems[end];
        // we are subtracting the previous number and adding the next number and updating the windowSum
        console.log(windowSum)
        console.log('listOfItems[start]', listOfItems[start])
        console.log('listOfItems[end]', listOfItems[end])
        // we are updating the maxSum if the windowSum is greater than maxSum
        maxSum = Math.max(windowSum, maxSum);
        // we are moving the window by incrementing the start and end
        start++;
        end++;
    }

    console.log("maxSum", maxSum, "windowSum", windowSum, "end", end, "start", start)
    return maxSum;
}


// const input = [1, 2, 6, 2, 4, 1],

const input = [1, 2, 6, 2, 4, 1, 4, 2, 5, 8],
    windowSize = 3;

console.log(
    `Maximum sum of a sub-array of window size ${windowSize} is ${findMaxSumOfSequence(
        input,
        windowSize
    )}`
);