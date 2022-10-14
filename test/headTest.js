const head = require('../head');
const assertEqual = require('../assertEqual')

assertEqual(head([]), 5);
assertEqual(head([6]), 6);
assertEqual(head([true]), false);
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");