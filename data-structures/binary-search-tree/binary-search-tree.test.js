const { BST } = require('./binary-search-tree');

test('initializes a binary search tree', () => {
  const bst = new BST(1);

  expect(bst.root.value).toBe(1);
});

test('initializes an empty binary search tree', () => {
  const bst = new BST();

  expect(bst.root).toBe(null);
});

test('can insert into an empty binary search tree', () => {
  const bst = new BST();
  bst.insert(2);
  bst.insert(3);
  bst.insert(1);

  expect(bst.root.value).toBe(2);
  expect(bst.root.left.value).toBe(1);
  expect(bst.root.right.value).toBe(3);
});

test('can get the count of a binary search tree', () => {
  const bst = new BST();
  bst.insert(5);
  bst.insert(2);
  bst.insert(1);
  bst.insert(4);
  bst.insert(3);

  const count = bst.getNodeCount();

  expect(count).toBe(15);
});

test('can print the binary search tree', () => {
  const consoleSpy = jest.spyOn(console, 'log');

  const bst = new BST();
  bst.insert(5);
  bst.insert(2);
  bst.insert(1);
  bst.insert(4);
  bst.insert(3);

  bst.printValues();

  expect(consoleSpy).toHaveBeenCalledWith(1);
  expect(consoleSpy).toHaveBeenCalledWith(2);
  expect(consoleSpy).toHaveBeenCalledWith(3);
  expect(consoleSpy).toHaveBeenCalledWith(4);
  expect(consoleSpy).toHaveBeenCalledWith(5);

  jest.restoreAllMocks();
});

test('can find a value in a binary search tree', () => {
  const bst = new BST();
  bst.insert(5);
  bst.insert(2);
  bst.insert(1);
  bst.insert(4);
  bst.insert(3);

  const isSixInTree = bst.isInTree(6);
  const isOneInTree = bst.isInTree(1);

  expect(isSixInTree).toBe(false);
  expect(isOneInTree).toBe(true);
});

test('can find the height of a single node binary search tree', () => {
  const bst = new BST();
  bst.insert(6);

  const height = bst.getHeight();

  expect(height).toBe(0);
});

test('can find the height of a binary search tree', () => {
  const bst = new BST();
  bst.insert(6);
  bst.insert(2);
  bst.insert(1);
  bst.insert(4);
  bst.insert(3);
  bst.insert(5);

  const height = bst.getHeight();

  expect(height).toBe(3);
});

test('can find the min of a binary search tree', () => {
  const bst = new BST();
  bst.insert(6);
  bst.insert(2);
  bst.insert(1);
  bst.insert(4);
  bst.insert(3);
  bst.insert(5);

  const min = bst.getMin();

  expect(min).toBe(1);
});

test('can find the max of a binary search tree', () => {
  const bst = new BST();
  bst.insert(6);
  bst.insert(2);
  bst.insert(1);
  bst.insert(4);
  bst.insert(3);
  bst.insert(5);

  const max = bst.getMax();

  expect(max).toBe(6);
});

test('can check if valid binary search tree', () => {
  const bst = new BST();
  bst.insert(6);
  bst.insert(2);
  bst.insert(1);
  bst.insert(4);
  bst.insert(3);
  bst.insert(5);

  const isValidBst = bst.isBinarySearchTree();

  expect(isValidBst).toBe(true);
});

test('can delete a node with no children from the binary search tree', () => {
  const bst = new BST();
  bst.insert(2);
  bst.insert(3);
  bst.insert(1);

  bst.deleteValue(3);

  expect(bst.isInTree(3)).toBe(false);
});

test('can delete a node with one child from the binary search tree', () => {
  const bst = new BST();
  bst.insert(2);
  bst.insert(3);
  bst.insert(1);
  bst.insert(4);

  bst.deleteValue(3);

  expect(bst.isInTree(3)).toBe(false);
  expect(bst.root.right.value).toBe(4);
});

test('can delete a node with two children from the binary search tree', () => {
  const bst = new BST();
  bst.insert(12);
  bst.insert(5);
  bst.insert(15);
  bst.insert(3);
  bst.insert(7);
  bst.insert(1);
  bst.insert(9);
  bst.insert(8);
  bst.insert(11);
  bst.insert(13);
  bst.insert(17);
  bst.insert(14);
  bst.insert(20);
  bst.insert(18);
  bst.insert(16);

  bst.deleteValue(15);

  expect(bst.isInTree(15)).toBe(false);
  expect(bst.isInTree(17)).toBe(true);
  expect(bst.isInTree(20)).toBe(true);
  expect(bst.isInTree(18)).toBe(true);
  expect(bst.root.right.value).toBe(16);
});

test('can get a successor for a node in the binary search tree', () => {
  const bst = new BST();
  bst.insert(15);
  bst.insert(10);
  bst.insert(20);
  bst.insert(8);
  bst.insert(12);
  bst.insert(17);
  bst.insert(25);
  bst.insert(6);
  bst.insert(11);
  bst.insert(16);
  bst.insert(27);

  expect(bst.getSuccessor(6).value).toBe(8);
  expect(bst.getSuccessor(10).value).toBe(11);
  expect(bst.getSuccessor(12).value).toBe(15);
});
