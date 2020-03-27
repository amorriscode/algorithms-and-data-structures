const Queue = require('./queue-linked-list');

test('initializes an empty queue', () => {
  const queue = new Queue();

  expect(queue.empty()).toBe(true);
});

test('can add items to the queue', () => {
  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);

  expect(queue.empty()).toBe(false);
});

test('can remove items from the queue', () => {
  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);

  const dequeuedItem = queue.dequeue();

  expect(queue.empty()).toBe(false);
  expect(dequeuedItem).toBe(1);
});
