const assert = require('chai').assert;
const head = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });

  it("returns '[]' for '5'", () => {
    assert.strictEqual(head([]), '5');
  });

  it("returns '6' for ['6']", () => {
    assert.strictEqual(head(['6']), '6');
  });

  it("returns 'false' for ['true']", () => {
    assert.strictEqual(head(['true']), 'false');
  });

  it("returns '5' for ['5', '6', '7']", () => {
    assert.strictEqual(head(['5', '6', '7']), '5');
  });

  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello');
  });
  
});