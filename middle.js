const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');


//what to do
// The middle function should return an array with
// only the middle element(s) of the provided array.
// This means that the length of the returned elements
// could vary.

//conditions
// For arrays with one or two elements, there is no middle.
// Return an empty array.

// For arrays with odd number of elements, an array containing
// a single middle element should be returned.

// For arrays with an even number of elements, an array containing
// the two elements in the middle should be returned

const middle = function(arr) {
  let midValue = [];

  if (arr.length <= 2) {
    return midValue;
  } else if (arr.length % 2 !== 0) {
    midValue = [arr[Math.floor(arr.length / 2)]];
    
  } else if (arr.length % 2 === 0) {
    midValue = [arr[Math.floor(arr.length / 2 - 1)], arr[Math.floor(arr.length / 2)]];
  }
  return midValue;
};

module.exports = middle;