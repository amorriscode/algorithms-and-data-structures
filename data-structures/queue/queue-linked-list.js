const { LinkedList } = require('../linked-list/linked-list-with-tail');

class Queue {
  constructor() {
    this.queue = new LinkedList();
  }

  enqueue(value) {
    this.queue.pushBack(value);
  }

  dequeue() {
    return this.queue.popFront();
  }

  empty() {
    return this.queue.empty();
  }
}

module.exports = Queue;
