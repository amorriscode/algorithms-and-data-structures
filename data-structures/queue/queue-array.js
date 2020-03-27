class Queue {
  constructor(size = 8) {
    this.queue = new Array(size).fill(null);
    this.read = 0;
    this.write = 0;
    this.size = 0;
  }

  incrementIndex(index) {
    return index + 1 % this.queue.length;
  }

  enqueue(value) {
    if (this.full()) {
      throw Error('Queue is full');
    }

    this.queue[this.write] = value;
    this.write = this.incrementIndex(this.write);
    this.size++;
  }

  dequeue() {
    const item = this.queue[this.read];
    this.queue[this.read] = null;
    this.read = this.incrementIndex(this.read);
    this.size--;

    return item;
  }

  empty() {
    return this.size === 0;
  }

  full() {
    return this.size === this.queue.length - 1;
  }
}

module.exports = Queue;
