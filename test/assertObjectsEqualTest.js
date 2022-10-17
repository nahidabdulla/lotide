const assertObjectsEqual = require('../assertObjectsEqual');

const cars1 = {
  honda: 2018,
  mercedes: [2004, 2005],
  ford: 2008
};

const cars2 = {
  honda: 2014,
  mercedes: [2004, 2005],
  ford: 2008
};

assertObjectsEqual(cars1, cars2); // => assertion failed