const assertEqual = require('./assertEqual')

// Create a function tail which returns the "tail" of an array:
// everything except for the first item (head) of the provided
// array.

// Your function should not modify the array that is passed in.
// It should return a new array.

// Warning
// Our assertEqual function is too simple to compare array values.
// JavaScript doesn't allow the use of === or == to compare two
// arrays.

// An array with only one element should yield an empty array for its tail
// An empty array should yield an empty array for its tail

const tail = function(arr) {
  return arr.slice(1);
};

module.exports = tail;