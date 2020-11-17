// const sum = require('./airport');

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });


const { test, expect } = require('@jest/globals');

const airport = require('./airport');

test('plane can land at airport', () => {
  expect(airport("land")).toBe("land");
});