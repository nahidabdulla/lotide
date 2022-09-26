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


// 1. take in sourceArr and itemsToRemove arr
// 2. return newArr with elements in source that are not in itemsToRemove
// 3. original arr should not be modified




const without = function(sourceArr, itemsToRemove) {

  if (eqArrays(sourceArr, itemsToRemove) === false){
    let filtered = sourceArr.filter(elem => !itemsToRemove.includes(elem));
    return filtered;
  }
};


// //Test cases
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
console.log(without([7, 8, 9], [7, 8, 9])); // => undefined
console.log(without(['apple', 'banana', 'strawberry'], ['apple', 'strawberry', 'banana'])); // => []
console.log(without([5, 6, 7], [7, 6, 5])); // // => []
console.log(without(['blue', 'yellow', 'green', 'red', 'purple'], ['pink', 'red', 'orange', 'blue'])); // => ['yellow', 'green', 'purple']

//Test case (must return new array and not a modified version of old array)
const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

const cars = ['honda', 'toyota', 'ford'];
console.log(without(cars, ['lexus', 'mercedes', 'toyota', 'ford']));
assertArraysEqual(cars, ['honda', 'toyota', 'ford']);

const colours = ['blue', 'green', 'yellow', 'red'];
console.log(without(colours, ['purple', 'green', 'pink', 'blue']));
assertArraysEqual(colours, ['blue', 'green', 'yellow', 'red']);

