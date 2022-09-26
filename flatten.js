const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};


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


const flatten = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) === true) {
      arr = arr.flat();
    }
  }
  return arr;
};

//Test cases
console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
console.log(flatten(['blue', 'green', 'yellow', ['purple', 'pink', 'red']])); // => ['blue', 'green', 'yellow', 'purple', 'pink', 'red']
console.log(flatten([5, 10, 15, 20, [2, 4, 6, 8], 25, 30])); // => [5, 10, 15, 20, 2, 4, 6, 8, 25, 30]


assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]),[1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten(['blue', 'green', 'yellow', ['purple', 'pink', 'red']]),['blue', 'green', 'yellow', 'purple', 'pink', 'red']);