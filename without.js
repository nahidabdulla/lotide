const eqArrays = require('./eqArrays');

/*Takes in a source array and an itemsToRemove arrays and returns only the 
items from the source array that are not in the itemsToRemove array*/

const without = function(sourceArr, itemsToRemove) {

  if (eqArrays(sourceArr, itemsToRemove) === false) {
    let filtered = sourceArr.filter(elem => !itemsToRemove.includes(elem));
    return filtered;
  }
};

module.exports = without;