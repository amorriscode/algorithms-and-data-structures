const binarySearch = require('./binary-search');

test('returns the index of an existing number in a sorted array', () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  expect(binarySearch(arr, 1)).toBe(0);
  expect(binarySearch(arr, 7)).toBe(6);
  expect(binarySearch(arr, 10)).toBe(9);
});

test('returns -1 if a number is not in a sorted array', () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  expect(binarySearch(arr, 42)).toBe(-1);
});