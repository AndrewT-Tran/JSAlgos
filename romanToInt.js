/**
 * @param {string} s
 * @return {number}
 */
function romanToInt(s) {
    // I before V and X will give 4 and 9
    // X before L and C give 40 and 90
    // C before D and M give 400 and 900
    // other than these cases, the roman number is just the sum of the values of the letters
    const romanValues = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let result = 0;

    for (let i = 0; i < s.length; i++) {
        if (
            (s[i] === "I" && (s[i + 1] === "V" || s[i + 1] === "X")) ||
            (s[i] === "X" && (s[i + 1] === "L" || s[i + 1] === "C")) ||
            (s[i] === "C" && (s[i + 1] === "D" || s[i + 1] === "M"))
        ) {
            result += romanValues[s[i + 1]] - romanValues[s[i]];
            i++;
        } else {
            result += romanValues[s[i]];
        }
    }
    return result;
};

console.log(romanToInt("III")); // 3
console.log(romanToInt("IV")); // 4
console.log(romanToInt("IX")); // 9
