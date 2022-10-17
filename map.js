/*Takes in an array and a callback and returns a new array based 
on the results of the callback on each item in the array*/

const map = function(arr, callback) {
  const results = [];
  for (let item of arr) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;