const { LinkedList, ListNode } = require('./linked-list-with-tail');

test('initializes an empty linked list', () => {
  const list = new LinkedList();

  expect(list.head).toBe(null);
  expect(list.size()).toBe(0);
  expect(list.empty()).toBe(true);
});

test('initializes a list with values', () => {
  const list = new LinkedList(new ListNode(1, new ListNode(2)));

  expect(list.head).not.toBe(null);
  expect(list.size()).toBe(2);
  expect(list.empty()).toBe(false);
});

test('throws an error when accessing an empty list', () => {
  const list = new LinkedList();

  expect(() => {
    list.valueAt(1);
  }).toThrow(new Error('List is empty'));
});

test('throws an error when accessing an index out of bounds', () => {
  const list = new LinkedList(new ListNode(1));

  expect(() => {
    list.valueAt(1);
  }).toThrow(new Error('Index out of bounds'));
});

test('can get the value of a node at a specific index', () => {
  const list = new LinkedList(new ListNode(1, new ListNode(2, new ListNode(3))));

  expect(list.valueAt(1)).toBe(2);
});

test('can push to the front of the list', () => {
  const list = new LinkedList(new ListNode(1));
  list.pushFront(2);

  expect(list.valueAt(0)).toBe(2);
  expect(list.size()).toBe(2);
});

test('can pop from the front of the list', () => {
  const list = new LinkedList(new ListNode(1, new ListNode(2)));
  const poppedNode = list.popFront();

  expect(list.valueAt(0)).toBe(2);
  expect(list.size()).toBe(1);
  expect(poppedNode).toBe(1);
});

test('can push to the back of the list', () => {
  const list = new LinkedList(new ListNode(1));
  list.pushBack(2);

  expect(list.valueAt(1)).toBe(2);
  expect(list.size()).toBe(2);
  expect(list.tail.value).toBe(2);
});

test('can pop from the back of the list', () => {
  const list = new LinkedList(new ListNode(1, new ListNode(2)));

  expect(list.tail.value).toBe(2);
  const poppedNode = list.popBack();

  expect(list.valueAt(0)).toBe(1);
  expect(list.size()).toBe(1);
  expect(poppedNode).toBe(2);
});

test('can return the front of the list', () => {
  const list = new LinkedList(new ListNode(1, new ListNode(2)));
  const front = list.front();

  expect(list.valueAt(0)).toBe(front);
  expect(front).toBe(1);
  expect(list.size()).toBe(2);
});

test('can return the back of the list', () => {
  const list = new LinkedList(new ListNode(1, new ListNode(2)));
  const back = list.back();

  expect(list.valueAt(1)).toBe(back);
  expect(back).toBe(2);
  expect(list.size()).toBe(2);
});

test('can insert at any index in the list', () => {
  const list = new LinkedList(new ListNode(1, new ListNode(2, new ListNode(3))));
  list.insert(1, 4);

  expect(list.valueAt(1)).toBe(4);
  expect(list.size()).toBe(4);
});

test('can erase at any index in the list', () => {
  const list = new LinkedList(new ListNode(1, new ListNode(2, new ListNode(3))));
  list.erase(1);

  expect(list.valueAt(1)).toBe(3);
  expect(list.size()).toBe(2);
});

test('can get the nth item in the list', () => {
  const list = new LinkedList(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4)))));

  expect(list.nth(0)).toBe(1);
  expect(list.nth(1)).toBe(2);
  expect(list.nth(2)).toBe(3);
  expect(list.nth(3)).toBe(4);
});

test('can get the nth item from the back in the list', () => {
  const list = new LinkedList(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4)))));

  expect(list.nthFromEnd(0)).toBe(4);
  expect(list.nthFromEnd(1)).toBe(3);
  expect(list.nthFromEnd(2)).toBe(2);
  expect(list.nthFromEnd(3)).toBe(1);
});

test('can reverse the list', () => {
  const list = new LinkedList(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4)))));
  list.reverse();

  expect(list.valueAt(0)).toBe(4);
  expect(list.valueAt(1)).toBe(3);
  expect(list.valueAt(2)).toBe(2);
  expect(list.valueAt(3)).toBe(1);
});

test('can remove an item from the list based on the value', () => {
  const list = new LinkedList(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4)))));
  list.removeValue(3);

  expect(list.valueAt(0)).toBe(1);
  expect(list.valueAt(1)).toBe(2);
  expect(list.valueAt(2)).toBe(4);
  expect(list.size()).toBe(3);
});
