const eqArrays = require('./eqArrays');

// returns items in sourceArr that aren't in itemsToRemove

const without = function(sourceArr, itemsToRemove) {

  if (eqArrays(sourceArr, itemsToRemove) === false) {
    let filtered = sourceArr.filter(elem => !itemsToRemove.includes(elem));
    return filtered;
  }
};

module.exports = without;