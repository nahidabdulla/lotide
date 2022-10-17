const flatten = require('../flatten');
const assertArraysEqual = require('../assertArraysEqual');

//Test cases
console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
console.log(flatten(['blue', 'green', 'yellow', ['purple', 'pink', 'red']])); // => ['blue', 'green', 'yellow', 'purple', 'pink', 'red']
console.log(flatten([5, 10, 15, 20, [2, 4, 6, 8], 25, 30])); // => [5, 10, 15, 20, 2, 4, 6, 8, 25, 30]


assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]),[1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten(['blue', 'green', 'yellow', ['purple', 'pink', 'red']]),['blue', 'green', 'yellow', 'purple', 'pink', 'red']);