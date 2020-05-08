class MaxHeap {
  constructor(value = null) {
    this.heap = value ? [value] : [];
  }

  parentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  leftIndex(index) {
    return (2 * index) + 1;
  }

  rightIndex(index) {
    return (2 * index) + 2;
  }

  swap(firstIndex, secondIndex) {
    const temp = this.heap[firstIndex];
    this.heap[firstIndex] = this.heap[secondIndex];
    this.heap[secondIndex] = temp;
  }

  getMax() {
    return this.heap[0];
  }
  
  getSize() {
    return this.heap.length;
  }
  
  isEmpty() {
    return this.heap.length === 0;
  }
  
  extractMax() {
    this.swap(0, this.heap.length - 1);
    const max = this.heap.pop();

    // TODO: Fix this edge case
    this.heapify(0);
    this.siftDown(0);

    return max;
  }

  insert(value) {
    this.heap.push(value);
    this.siftUp(this.heap.length - 1);
  }

  remove(value) {
    for (let i = 0; i < this.heap.length; i++) {
      if (this.heap[i] === value) {
        // Last element in the heap; simply remove it
        if (i === this.heap.length - 1) {
          this.heap.pop();
        } else {
          // Replace the element being removed with the last element
          this.heap[i] = this.heap.pop();
          const parentIndex = this.parentIndex(i);

          if (this.heap[parentIndex] < this.heap[i]) {
            this.siftUp(i);
          } else {
            this.siftDown(i);
          }
        }
      }
    }
  }

  heapify(index = 0) {
    const currValue = this.heap[index];

    const leftIndex = this.leftIndex(index);
    const leftChild = this.heap[leftIndex];

    const rightIndex = this.rightIndex(index);
    const rightChild = this.heap[rightIndex];

    // If we are not at a leaf
    if (leftChild && rightChild) {
      // And a child below is smaller than us
      if (currValue < leftChild || currValue < rightChild) {
        // Swap with the bigger child
        if (leftChild > rightChild) {
          this.swap(index, leftIndex);
          this.heapify(leftIndex);
        } else {
          this.swap(index, rightIndex);
          this.heapify(rightIndex);
        }
      }
    }
  }
  
  siftUp(index) {
    if (index === 0) {
      return;
    }

    const parentIndex = this.parentIndex(index);

    if (this.heap[parentIndex] < this.heap[index]) {
      this.swap(parentIndex, index);
      this.siftUp(parentIndex);
    }
  }

  siftDown(index) {
    if (index === this.heap.length - 1) {
      return;
    }

    const leftIndex = this.leftIndex(index);
    const rightIndex = this.rightIndex(index);

    if (this.heap[leftIndex] > this.heap[index]) {
      this.swap(leftIndex, index);
      this.siftDown(leftIndex);
    } else if (this.heap[rightIndex] > this.heap[index]) {
      this.swap(rightIndex, index);
      this.siftDown(rightIndex);
    }
  }

  heapSort(arr) {
    this.heap = arr;

    for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
      this.heapify(i);
    }

    const sortedArray = [];

    while (!this.isEmpty()) {
      sortedArray.push(this.extractMax());
    }

    return sortedArray.reverse();
  }
}

module.exports = {
  MaxHeap,
}
