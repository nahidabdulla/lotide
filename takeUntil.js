/*returns a sliced version of the array based on condition 
specified in the callback*/

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