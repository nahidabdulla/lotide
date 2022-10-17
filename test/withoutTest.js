const without = require('../without');
const assertArraysEqual = require('../assertArraysEqual');

// //Test cases
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
console.log(without([7, 8, 9], [7, 8, 9])); // => undefined
console.log(without(['apple', 'banana', 'strawberry'], ['apple', 'strawberry', 'banana'])); // => []
console.log(without([5, 6, 7], [7, 6, 5])); // // => []
console.log(without(['blue', 'yellow', 'green', 'red', 'purple'], ['pink', 'red', 'orange', 'blue'])); // => ['yellow', 'green', 'purple']

//Test case (must return new array and not a modified version of old array)
const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

const cars = ['honda', 'toyota', 'ford'];
console.log(without(cars, ['lexus', 'mercedes', 'toyota', 'ford']));
assertArraysEqual(cars, ['honda', 'toyota', 'ford']);

const colours = ['blue', 'green', 'yellow', 'red'];
console.log(without(colours, ['purple', 'green', 'pink', 'blue']));
assertArraysEqual(colours, ['blue', 'green', 'yellow', 'red']);

