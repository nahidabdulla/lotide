/*Takes in an array that contains elements including nested 
array of elements and returns a flattened version of the array*/

const flatten = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) === true) {
      arr = arr.flat();
    }
  }
  return arr;
};

module.exports = flatten;