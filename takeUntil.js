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

// The function will return a "slice of the array with elements taken from
// the beginning." It should keep going until the callback/predicate returns
// a truthy value.

// To keep things simple, the callback should only be provided one value:
// The item in the array.

const takeUntil = function(arr, callback) {
  let sliced = [];
  for (let i = 0; i < arr.length; i++) {
    const e = arr[i];
    if (callback(e)) {
      sliced = arr.slice(0, i);
      break;
    }
  }
  return sliced;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);

console.log('---');

const data3 = [55, 103, 12, 0, 546, 2, 18];
const results3 = takeUntil(data3, x => x < 300);
console.log(results3);
assertArraysEqual(results3, []);

console.log('---');

const data4 = ["Birds", "flying", "high", ",", "you", "know", "how", "I", "feel"];
const results4 = takeUntil(data4, x => x === 'high');
console.log(results4);
assertArraysEqual(results4, ["Birds", "flying"]);