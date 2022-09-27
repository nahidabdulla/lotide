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

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};


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

console.log(middle([5, 6, 7, 8, 9])); //=> [7]
console.log(middle([1])); //=> []
console.log(middle([1, 2, 3, 4])); //=> [2,3]
console.log(middle([2, 4, 6, 8, 10, 12])); //=> [6,8]

assertArraysEqual(middle([5, 6, 7, 8, 9]), [7]); //=> PASS
assertArraysEqual(middle([1]), []); //=> PASS
assertArraysEqual(middle([1, 2, 3, 4]), [2,3]); //=> PASS
assertArraysEqual(middle([2, 4, 6, 8, 10, 12]), [6,8]); //=> PASS