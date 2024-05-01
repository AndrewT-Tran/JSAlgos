// Binary search is a technique for very rapidly searching a sorted collection by cutting the search space in half at every pass.

// Given a sorted array, such as this:
// [1, 3, 16, 22, 31, 33, 34]

// You can search for the value 31, as follows:

// 1) Pick the midpoint: 22.
// 2) The value is higher than 22, so now consider only the right half of the previous array:
// [...31, 33, 34]

function binarySearch(arr, x, low, high) {
    if (low > high) {
        return -1
    }
    else {
        mid = (low + high) / 2
    }
    if (x == arr[mid]) {
        return mid
    }        // x is the midpoint
    else if (x > arr[mid]) {
        return binarySearch(arr, x, mid + 1, high)
    }        // x is on the right side
    else {                              // x is on the right side
        return binarySearch(arr, x, low, mid - 1)
    }
}

console.log(binarySearch([1, 3, 16, 22, 31, 33, 34], 31, 0, 6)) // 4
