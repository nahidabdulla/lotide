const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//input
// countOnly will be given an array and an object.

//Output
//It will return an object containing counts of everything
//that the input object listed.

//Conditions

// 1. only keys which have a truthy value should be counted
// in the resulting object.
// if (obj[""][i] === true) {
//   return
// }

// b) All other strings (either set to false or not included at all in the object)
// should not be counted.

// if (obj[""][i] === false || obj[""][i === undefined]) {
//   return
// }

// c) That said, if a particular string is meant to be counted but does not exist
// in the input array (like "f" in the example above), it also does not
// have to be included in the final count.


// allItems: an array of strings we need to look through

// itemsToCount: an object specifying what to count

const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, {"Jason": true, "Karima": true, "Fang": true, "Agouhanna": false,});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);