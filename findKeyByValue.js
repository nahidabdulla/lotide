//returns the first key that contains the value in the object

const findKeyByValue = function(obj, value) {
  return Object.keys(obj).find(key => obj[key] === value);
};


module.exports = findKeyByValue;