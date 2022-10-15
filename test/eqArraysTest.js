const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

// Test cases
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => PASS
assertEqual(eqArrays([4535, 4355435, 3656464],[342432, 32545, 46543654]), false); // => PASS
assertEqual(eqArrays(['clouds', 'sun', 'birds'], ['moon', 'stars', 'nightsky']), true); // => FAIL
assertEqual(eqArrays(['blue', 'red', 'green', 'orange'], ['blue', 'red', 'green', 'orange']), false); // => FAIL