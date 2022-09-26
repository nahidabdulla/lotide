/*
1. if actual === expected {
  console.log(Assertion Passed:[actual] === [expected]);
} 2. Else {
  console.log(Assertion Failed: [actual !== [expected]);
}
*/

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual('Blue', 'Gold');
assertEqual('Red', 'Red');
assertEqual(765, 567);
assertEqual(6578, 6578);
assertEqual(true, false);