const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

const result = tail(["Hello", "Lighthouse", "Labs"]);

assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result, ["Lighthouse", "Labs"]);


// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words);
// assertEqual(words.length, 3);