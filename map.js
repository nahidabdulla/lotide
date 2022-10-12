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

const map = function(arr, callback){
  const results = [];
  for (let item of arr) {
    results.push(callback(item));
  }
  return results;
};

// const words = ["ground", "control", "to", "major", "tom"];


// const results1 = map(words, word => word[0]);
// assertArraysEqual(results1[0], ['g']);
// assertArraysEqual(results1[1], ['c']);
// assertArraysEqual(results1[2], ['t']);
// assertArraysEqual(results1[3], ['m']);
// assertArraysEqual(results1[4], ['t']);

// const cars = map(['honda', 'toyota', 'ford', 'nissan'], word => word.slice(2));
// console.log(cars);
// assertArraysEqual(cars[0], ['nda']);
// assertArraysEqual(cars[1], ['yota']);
// assertArraysEqual(cars[2], ['rd']);

// const colours = map(['blue', 'yellow', 'purple', 'pink'], word => word.includes('p') );
// assertArraysEqual(colours[0], [false]);
// assertArraysEqual(colours[1], [false]);
// assertArraysEqual(colours[2], [true]);

const chocolate = map(['lindor', 'kit kat', 'mars', 'oh henry'], word => word.lastIndexOf('i'));
assertArraysEqual(chocolate[0], [1]);
assertArraysEqual(chocolate[1], [1]);
assertArraysEqual(chocolate[2], [-1]);