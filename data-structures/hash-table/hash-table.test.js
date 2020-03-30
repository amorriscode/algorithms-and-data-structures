const HashTable = require('./hash-table');

test('initializes an empty hash table', () => {
  const hashTable = new HashTable();

  expect(hashTable.exists('some key')).toBe(false);
  expect(hashTable.get('some key')).toBe(undefined);
});

test('can add an item to the hash table', () => {
  const hashTable = new HashTable();
  hashTable.add('test', 123);

  expect(hashTable.exists('test')).toBe(true);
  expect(hashTable.get('test')).toBe(123);
});

test('can delete an item from the hash table', () => {
  const hashTable = new HashTable();
  hashTable.add('test', 123);
  expect(hashTable.exists('test')).toBe(true);

  hashTable.remove('test');
  expect(hashTable.exists('test')).toBe(false);
});

test('can store two items that have a colliding hash', () => {
  const hashTable = new HashTable();
  hashTable.add('ae', 123);
  hashTable.add('bd', 456);

  expect(hashTable.exists('ae')).toBe(true);
  expect(hashTable.get('ae')).toBe(123);
  expect(hashTable.exists('bd')).toBe(true);
  expect(hashTable.get('bd')).toBe(456);
});