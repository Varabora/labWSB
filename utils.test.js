const { add } = require('./utils');

test('dodaje poprawnie 2 + 3', () => {
  expect(add(2, 3)).toBe(5);
});