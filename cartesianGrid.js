
// ArrayCha11enge (strArr) take the
// array of strings stored in strArr, which will only contain 4
// elements and be in the form (x y) where x and y are both
// integers, and return the area of the rectangle formed by the 4
// points on a Cartesian grid. The 4 elements will be in arbitrary
// order. For example: if strArr is "(3 "(0 2)0, '(3
// then your program should return 6 because the width of
// the rectangle is 3 and the height is 2 and the area of a
// rectangle is equal to the width * height.

function arrayChallenge(strArr) {
    // Parse the input strings into coordinates
    const points = strArr.map(s => {
        // Using regex to find numbers enclosed in parenthesis, separated by a space
        const match = s.match(/\((-?\d+)\s(-?\d+)\)/);
        // Returns an object with x and y properties converted from string to integers
  
        return { 
            x: parseInt(match[1], 10), // Explicit base 10 ensures decimal conversion
            y: parseInt(match[2], 10) 
        };

    });

    console.log("points: ",points)
    //[ { x: 0, y: 0 }, 
    // { x: 3, y: 0 }, 
    // { x: 0, y: 2 }, 
    // { x: 3, y: 2 } ]
    console.log(points[1])
    // points is an object with
    // x: 0, y: 0
    // x: 3, y: 0
    // x: 0, y: 2
    // x: 3, y: 2

    // Calculate the distinct x and y values
    
    // uses map function to extract the x and y coordinates from each point
    console.log(points.map(point => point.x)) //[ 0, 3, 0, 3 ]
    // creates arrays containing the x and y coordinates of all the points 
    // the spread operator is used to convert the Set back into an array.
    const xs = [...new Set(points.map(point => point.x))];
    // the Set object is used to remove any duplicate coordinates
    console.log("xs = ", xs) // [ 0, 3 ] notice the duplicates are gone
    const ys = [...new Set(points.map(point => point.y))];

    // Calculate the width and height of the rectangle
    const width = Math.max(...xs) - Math.min(...xs);
    console.log("Max x : ", Math.max(...xs),"Min x : ", Math.min(...xs))
    const height = Math.max(...ys) - Math.min(...ys);
    console.log("Max y : ", Math.max(...ys),"Min y : ", Math.min(...ys))

    // Return the area of the rectangle
    area = width * height;
    return `the area is ${area}`
}

// Test examples
console.log(arrayChallenge(["(0 0)", "(3 0)", "(0 2)", "(3 2)"]));  // Output: 6
// console.log(arrayChallenge(["(1 1)", "(1 3)", "(3 1)", "(3 3)"]));  // Output: 4
// console.log(arrayChallenge(["(0 0)", "(1 0)", "(0 1)", "(1 1)"]));  // Output: 1
// console.log(arrayChallenge(["(-2 -2)", "(2 -2)", "(-2 2)", "(2 2)"]));  // Output: 16



// here we are solving without using regex
// function arrayChallengeNoRegex(strArr) {
//     // Parse the input strings into coordinates
//     const points = strArr.map(s => {
//         // Remove parentheses and split by space
//         const coords = s.slice(1, -1).split(' ');
//         console.log(coords)
//         return { x: parseInt(coords[0], 10), y: parseInt(coords[1], 10) };
//     });
  
//     // Calculate the distinct x and y values
//     const xs = [...new Set(points.map(point => point.x))];
//     const ys = [...new Set(points.map(point => point.y))];
  
//     // Calculate the width and height of the rectangle
//     const width = Math.max(...xs) - Math.min(...xs);
//     const height = Math.max(...ys) - Math.min(...ys);
  
//     // Return the area of the rectangle
//     return width * height;
//   }
// console.log(arrayChallengeNoRegex(["(0 0)", "(3 0)", "(0 2)", "(3 2)"]));  // Output: 6
// console.log(arrayChallengeNoRegex(["(1 1)", "(1 3)", "(3 1)", "(3 3)"]));  // Output: 4
// console.log(arrayChallengeNoRegex(["(0 0)", "(1 0)", "(0 1)", "(1 1)"]));  // Output: 1
// console.log(arrayChallengeNoRegex(["(-2 -2)", "(2 -2)", "(-2 2)", "(2 2)"]));  // Output: 16