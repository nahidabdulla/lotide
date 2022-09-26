const eqArrays = function(arr1, arr2) {
  return arr1.toString() === arr2.toString();

};


// Implement assertArraysEqual which will take in two arrays
// and console.log an appropriate message to the console.

// The message will be similar to that of assertEqual. In fact,
// you could refer to the code for assertEqual to help you implement
// this. Instead of doing a simple === check though, this assertion
// function will make use of your eqArrays function for array comparison.

// you can and should call the function below its declaration and visually
// ensure that the message printed to the console is accurate.

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

assertArraysEqual([3444444454, 3444444454], [3444444454, 3444444454]); // => PASS
assertArraysEqual(['orange', 'blue', 'yellow'], ['yellow', 'blue', 'purple']); // => FAIL
assertArraysEqual([1, 2, 3, 4], [4, 3, 2, 1]); // => FAIL
assertArraysEqual(['apple', 'orange', 'banana', 'strawberry'], ['apple', 'orange', 'banana', 'strawberry']); // => PASS