const takeUntil = require('../takeUntil');
const assertArraysEqual = require('../assertArraysEqual');

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