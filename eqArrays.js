const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


// Implement a function eqArrays which takes in two arrays and returns
// true or false, based on a perfect match.

// Use assertEqual to write test cases for various scenarios.

// It's okay for eqArrays to not return true for nested arrays or arrays
// of objects that are identical. We will save this "deeper" problem for
// another day.

const eqArrays = function(arr1, arr2) {

  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

// Test cases
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => PASS
assertEqual(eqArrays([4535, 4355435, 3656464],[342432, 32545, 46543654]), false); // => PASS
assertEqual(eqArrays(['clouds', 'sun', 'birds'], ['moon', 'stars', 'nightsky']), true); // => FAIL
assertEqual(eqArrays(['blue', 'red', 'green', 'orange'], ['blue', 'red', 'green', 'orange']), false); // => FAIL