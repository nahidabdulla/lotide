const eqArrays = require('./eqArrays');

/*function to compare objects including objects with nested arrays
returns true if objects are equal*/

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (const key of Object.keys(object1)) {
  
    Array.isArray(object1[key], object2[key]);

    if (Array.isArray(object1[key], object2[key]) === true) {
      eqArrays(object1[key], object2[key]);

      if (eqArrays(object1[key], object2[key]) !== true) {
        return false;

      }

    } else if (object1[key] !== object2[key]) {
      return false;

    }
  }
  return true;
};

module.exports = eqObjects;