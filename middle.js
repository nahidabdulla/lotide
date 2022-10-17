//returns the element(s) in the middle of the array

const middle = function(arr) {
  let midValue = [];

  if (arr.length <= 2) {
    return midValue;
  } else if (arr.length % 2 !== 0) {
    midValue = [arr[Math.floor(arr.length / 2)]];
    
  } else if (arr.length % 2 === 0) {
    midValue = [arr[Math.floor(arr.length / 2 - 1)], arr[Math.floor(arr.length / 2)]];
  }
  return midValue;
};

module.exports = middle;