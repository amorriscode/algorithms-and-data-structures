class Array {
  constructor(capacity = 2) {
    this.arrSize = 0;
    this.arrCapacity = capacity;
    this.data = {};
  }

  resize(newCapacity) {
    this.arrCapacity = newCapacity;
  }

  increaseSize() {
    this.arrSize++;
    if (this.arrSize === this.arrCapacity) {
      this.resize(this.arrSize * 2);
    }
  }

  decreaseSize() {
    this.arrSize--;
    if (this.arrSize === this.arrCapacity / 4) {
      this.resize(this.arrCapacity / 2);
    }
  }

  size() {
    return this.arrSize;
  }

  capacity() {
    return this.arrCapacity;
  }

  isEmpty() {
    return this.arrSize === 0;
  }

  at(index) {
    const item = this.data[index];
    if (!item) {
      throw Error('Index out of bounds');
    }
    return item;
  }

  push(item) {
    this.data[this.arrSize] = item;
    this.increaseSize();
    return this.arrSize;
  }

  insert(index, item) {
    for (let i = this.arrSize; i >= index; i--) {
      this.data[i + 1] = this.data[i];

      if (i === index) {
        this.data[i] = item;
        break;
      }
    }

    this.increaseSize();
    
    return this.arrSize;
  }

  prepend(item) {
    this.insert(0, item);
    return this.arrSize;
  }

  pop() {
    const item = this.data[this.arrSize - 1];
    this.data[this.arrSize - 1] = null;
    this.decreaseSize();
    return item;
  }

  delete(index) {
    for (let i = index + 1; i <= this.arrSize - 1; i++) {
      this.data[i - 1] = this.data[i];
    }
    delete this.data[this.arrSize - 1];
    this.decreaseSize();
    return this.arrSize;
  }

  remove(item) {
    for (let i = 0; i < this.arrSize - 1; i++) {
      if (this.data[i] === item) {
        this.delete(i);
      }
    }
    return this.arrSize;
  }

  find(item) {
    for (let i = 0; i < this.arrSize - 1; i++) {
      if (this.data[i] === item) {
        return i;
      }
    }
    return -1;
  }
}

module.exports = Array;