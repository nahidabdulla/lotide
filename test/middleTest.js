const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

console.log(middle([5, 6, 7, 8, 9])); //=> [7]
console.log(middle([1])); //=> []
console.log(middle([1, 2, 3, 4])); //=> [2,3]
console.log(middle([2, 4, 6, 8, 10, 12])); //=> [6,8]

assertArraysEqual(middle([5, 6, 7, 8, 9]), [7]); //=> PASS
assertArraysEqual(middle([1]), []); //=> PASS
assertArraysEqual(middle([1, 2, 3, 4]), [2,3]); //=> PASS
assertArraysEqual(middle([2, 4, 6, 8, 10, 12]), [6,8]); //=> PASS