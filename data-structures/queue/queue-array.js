class Queue {
  constructor(size = 8) {
    this.queue = new Array(size).fill(null);
    this.read = 0;
    this.write = 0;
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
  }

  dequeue() {
    const item = this.queue[this.read];
    this.queue[this.read] = null;
    this.read = this.incrementIndex(this.read);

    return item;
  }

  empty() {
    for (let i = 0; i < this.queue.length; i++) {
      if (this.queue[i] !== null) {
        return false;
      }
    }

    return true;
  }

  full() {
    let nullCounter = 0;
    for (let i = 0; i < this.queue.length; i++) {
      if (this.queue[i] === null) {
        nullCounter++;
      }
    }

    return nullCounter <= 1;
  }
}

module.exports = Queue;
