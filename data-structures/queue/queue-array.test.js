const Queue = require('./queue-array');

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

test('gives an error if the queue is full', () => {
  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  queue.enqueue(4);
  queue.enqueue(5);
  queue.enqueue(6);
  queue.enqueue(7);

  expect(() => {
    queue.enqueue(8);
  }).toThrow(new Error('Queue is full'));
  expect(queue.full()).toBe(true);
});
