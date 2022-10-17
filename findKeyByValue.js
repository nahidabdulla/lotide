/*Takes in an object and a value and returns the first key that 
corresponds to that value*/

const findKeyByValue = function(obj, value) {
  return Object.keys(obj).find(key => obj[key] === value);
};


module.exports = findKeyByValue;