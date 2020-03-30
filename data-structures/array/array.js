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

    // Double the array when we have run out of capacity
    if (this.arrSize === this.arrCapacity) {
      this.resize(this.arrSize * 2);
    }
  }

  decreaseSize() {
    this.arrSize--;

    // Half the capacity of the array if it is only 1/4 full
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
    // Shuffle every item down so we can insert 
    // a new item into the array
    for (let i = this.arrSize; i >= index; i--) {
      this.data[i + 1] = this.data[i];

      // Index found, add the item
      if (i === index) {
        this.data[i] = item;
        break;
      }
    }

    this.increaseSize();
    
    return this.arrSize;
  }

  prepend(item) {
    // Use internal insert method
    // to insert at the front of the array
    this.insert(0, item);
    return this.arrSize;
  }

  pop() {
    // Remove the last item of the array
    const item = this.data[this.arrSize - 1];
    this.data[this.arrSize - 1] = null;

    this.decreaseSize();

    return item;
  }

  delete(index) {
    // Shuffle all items down to the index
    for (let i = index + 1; i <= this.arrSize - 1; i++) {
      this.data[i - 1] = this.data[i];
    }

    // Remove the last item which is invalid
    delete this.data[this.arrSize - 1];

    this.decreaseSize();

    return this.arrSize;
  }

  remove(item) {
    // Find the correct item then use the internal
    // delete method to shuffle everything down
    for (let i = 0; i < this.arrSize - 1; i++) {
      if (this.data[i] === item) {
        this.delete(i);
      }
    }

    return this.arrSize;
  }

  find(item) {
    // Return the index of the item if found
    // otherwise -1
    for (let i = 0; i < this.arrSize - 1; i++) {
      if (this.data[i] === item) {
        return i;
      }
    }

    return -1;
  }
}

module.exports = Array;