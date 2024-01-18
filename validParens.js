// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.


/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {

    const stack = [];
    // map of open and close pairs
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    }
    // loop through string s
    for (let i = 0; i < s.length; i++) {
        // if open bracket, push to stack
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            stack.push(s[i]);
        } else {
            // if close bracket, pop from stack and check if it matches
            const last = stack.pop();
            // if the close from the map does not match the last open bracket
            if (s[i] !== map[last]) {
                return false;
            }
        }
    }
    // checks if there any reaming open brackets in stack
    if (stack.length !== 0) {
        return false;
    }
    console.log('stack, ', stack);
    return true;
};

// console.log(isValid('()')); // true
console.log(isValid('()[]{}')); // true
