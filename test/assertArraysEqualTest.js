const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([3444444454, 3444444454], [3444444454, 3444444454]); // => PASS
assertArraysEqual(['orange', 'blue', 'yellow'], ['yellow', 'blue', 'purple']); // => FAIL
assertArraysEqual([1, 2, 3, 4], [4, 3, 2, 1]); // => FAIL
assertArraysEqual(['apple', 'orange', 'banana', 'strawberry'], ['apple', 'orange', 'banana', 'strawberry']); // => PASS