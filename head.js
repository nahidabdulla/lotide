const assertEqual = require('./assertEqual');

/*
Create a function head which returns the first item in the
array.

The head function should not return the first element as an
array. It should simply return the element itself.

An array with only one element should still yield that one
element as its head

An empty array should yield undefined as its head
*/

const head = function(arr) {
  return arr[0];
};




module.exports = head;