// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".


/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    // checks if the array is empty
    if (strs.length === 0) {
        return "";
    }


    var prefix = strs[0];
    console.log(prefix);
    // loops through the array
    for (var i = 1; i < strs.length; i++) {
        // checks if the prefix is at the beginning of the string
        while (strs[i].indexOf(prefix) !== 0) {
            // if not, it removes the last character from the prefix
            prefix = prefix.substring(0, prefix.length - 1);
            // checks if the prefix is empty
            console.log(prefix);
            if (prefix === "") {
                return "";
            }
        }
    }

    return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));