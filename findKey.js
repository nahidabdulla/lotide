/*Takes in an object and callback and returns the first key that meets 
the criteria specified in callback*/

const findKey = function(obj, callback) {
  return Object.keys(obj).find(key => callback(obj[key]));
};

module.exports = findKey;