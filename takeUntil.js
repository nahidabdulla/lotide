/*Takes in an array and callback and returns a slice of the array 
based on the criteria specified in the callback*/

const takeUntil = function(arr, callback) {
  let sliced = [];
  for (let i = 0; i < arr.length; i++) {
    const e = arr[i];
    if (callback(e)) {
      sliced = arr.slice(0, i);
      break;
    }
  }
  return sliced;
};

module.exports = takeUntil;