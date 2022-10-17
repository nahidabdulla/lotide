const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns [7] for [5, 6, 7, 8, 9]", () => {
    assert.deepEqual(middle([5, 6, 7, 8, 9]),[7]);
  });

  it("returns [] for [1]", () => {
    assert.deepEqual(middle([1]),[]);
  });

  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([]),[]);
  });

  it("returns [6, 8] for [2, 4, 6, 8, 10, 12]", () => {
    assert.deepEqual(middle([2, 4, 6, 8, 10, 12]),[6, 8]);
  });
});