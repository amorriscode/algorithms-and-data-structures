const Array = require('./array');

test('initializes an empty array with size 2 and capacity of 4', () => {
  const arr = new Array();

  expect(arr.size()).toBe(0);
  expect(arr.capacity()).toBe(2);
  expect(arr.isEmpty()).toBe(true);
});

test('initializes an empty array with custom size', () => {
  const arr = new Array(8);

  expect(arr.size()).toBe(0);
  expect(arr.capacity()).toBe(8);
  expect(arr.isEmpty()).toBe(true);
});

test('increases size when an item is added', () => {
  const arr = new Array();
  arr.push('test item');

  expect(arr.size()).toBe(1);
});

test('increases capacity when required', () => {
  const arr = new Array();
  arr.push('test item');
  arr.push('test item');
  arr.push('test item');
  arr.push('test item');

  expect(arr.size()).toBe(4);
  expect(arr.capacity()).toBe(8);
});

test('throws an error when getting an array element out of bounds', () => {
  const arr = new Array();

  expect(() => {
    arr.at(5);
  }).toThrow(new Error('Index out of bounds'));
});

test('can push an item onto the array', () => {
  const arr = new Array();
  arr.push('test item');

  expect(arr.size()).toBe(1);
  expect(arr.at(0)).toBe('test item');
});

test('can insert an item at any index', () => {
  const arr = new Array();
  arr.push('test item 1');
  arr.push('test item 2');
  arr.push('test item 3');
  arr.push('test item 4');
  arr.insert(2, 'test item 5');

  expect(arr.size()).toBe(5);
  expect(arr.at(0)).toBe('test item 1');
  expect(arr.at(1)).toBe('test item 2');
  expect(arr.at(2)).toBe('test item 5');
  expect(arr.at(3)).toBe('test item 3');
  expect(arr.at(4)).toBe('test item 4');
});

test('can prepend an item to the beginning', () => {
  const arr = new Array();
  arr.push('test item 2');
  arr.push('test item 1');
  arr.prepend('test item 3');

  expect(arr.size()).toBe(3);
  expect(arr.at(0)).toBe('test item 3');
  expect(arr.at(1)).toBe('test item 2');
  expect(arr.at(2)).toBe('test item 1');
});

test('can pop an item from the array', () => {
  const arr = new Array();
  arr.push('test item 1');
  arr.push('test item 2');
  const poppedItem = arr.pop();

  expect(arr.size()).toBe(1);
  expect(poppedItem).toBe('test item 2');
});

test('can delete an item at any index', () => {
  const arr = new Array();
  arr.push('test item 1');
  arr.push('test item 2');
  arr.push('test item 3');
  arr.push('test item 4');
  arr.delete(2);

  expect(arr.size()).toBe(3);
  expect(arr.at(0)).toBe('test item 1');
  expect(arr.at(1)).toBe('test item 2');
  expect(arr.at(2)).toBe('test item 4');
});

test('can remove an item by value', () => {
  const arr = new Array();
  arr.push('test item 1');
  arr.push('test item 2');
  arr.push('test item 3');
  arr.push('test item 4');
  arr.remove('test item 3');

  expect(arr.size()).toBe(3);
  expect(arr.at(0)).toBe('test item 1');
  expect(arr.at(1)).toBe('test item 2');
  expect(arr.at(2)).toBe('test item 4');
});

test('can find the index of an item', () => {
  const arr = new Array();
  arr.push('test item 1');
  arr.push('test item 2');
  arr.push('test item 3');
  const itemIndex = arr.find('test item 2');

  expect(itemIndex).toBe(1);
});

test('returns negative one when an item is not found', () => {
  const arr = new Array();
  arr.push('test item 1');
  const itemIndex = arr.find('test item 13');

  expect(itemIndex).toBe(-1);
});