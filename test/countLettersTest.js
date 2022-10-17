const countLetters = require('../countLetters');

console.log(countLetters('pineapple and apples'));

console.log(countLetters('the sky is blue')); // { t: 1, h: 1, e: 2, s: 2, k: 1, y: 1, i: 1, b: 1, l: 1, u: 1 }
console.log(countLetters('purple')); // {p: 2, u: 1, r: 1, l: 1, e: 1}
console.log(countLetters('javascript is fun')); // {j: 1, a: 2, v: 1, s: 2, c: 1, r: 1, i: 2, p: 1, t: 1, f: 1, u: 1, n: 1}