//takes in a nested array and returns a flattened version

const flatten = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) === true) {
      arr = arr.flat();
    }
  }
  return arr;
};

module.exports = flatten;