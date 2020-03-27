class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
    this.tail = head;
    this.listSize = head ? 1 : 0;
    
    if (head !== null) {
      let temp = head;
      while (temp.next !== null) {
        this.listSize++;
        temp = temp.next;
        this.tail = temp;
      }
    }
  }

  size() {
    return this.listSize;
  }

  empty() {
    return this.listSize === 0;
  }

  valueAt(index) {
    if (!this.listSize) {
      throw Error('List is empty');
    }

    if (index > this.listSize - 1) {
      throw Error('Index out of bounds');
    }
    
    let temp = this.head;
    for (let i = 0; i < this.listSize; i++) {
      if (i === index) {
        return temp.value;
      }

      temp = temp.next;
    }
  }

  pushFront(value) {
    const newNode = new ListNode(value, this.head);
    this.head = newNode;
    this.listSize++;
  }

  popFront() {
    const poppedNode = this.head;
    this.head = poppedNode.next;
    this.listSize--;

    return poppedNode.value;
  }

  pushBack(value) {
    const newNode = new ListNode(value);

    if (this.head && this.tail) {
      this.tail.next = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }

    this.listSize++;
    this.tail = newNode;
  }

  popBack() {
    let temp = this.head;
    let prevNode;

    while (temp.next !== null) {
      prevNode = temp;
      temp = temp.next;
    }

    this.listSize--;
    prevNode.next = null;
    this.tail = prevNode;

    return temp.value;
  }

  front() {
    return this.head.value;
  }

  back() {
    return this.tail.value;
  }

  insert(index, value) {
    if (!this.listSize) {
      throw Error('List is empty');
    }

    if (index > this.listSize - 1) {
      throw Error('Index out of bounds');
    }

    let temp = this.head;
    for (let i = 0; i < this.listSize; i++) {
      if (i === index - 1) {
        temp.next = new ListNode(value, temp.next);
        break;
      }

      temp = temp.next;
    }

    this.listSize++;
  }

  erase(index) {
    if (!this.listSize) {
      throw Error('List is empty');
    }

    if (index > this.listSize - 1) {
      throw Error('Index out of bounds');
    }

    let temp = this.head;
    for (let i = 0; i < this.listSize; i++) {
      if (i === index - 1) {
        temp.next = temp.next.next;
        break;
      }

      temp = temp.next;
    }

    this.listSize--;
  }
  
  nth(n) {
    if (!this.listSize) {
      throw Error('List is empty');
    }

    if (n > this.listSize - 1) {
      throw Error('Index out of bounds');
    }

    let temp = this.head;
    for (let i = 0; i <= n; i++) {
      if (i === n) {
        break;
      }

      temp = temp.next;
    }

    return temp.value;
  }

  nthFromEnd(n) {
    if (!this.listSize) {
      throw Error('List is empty');
    }

    let first = this.head;
    let second = this.head;

    for (let i = 0; i < n; i++) {
      first = first.next;
    }

    while (first.next !== null) {
      first = first.next;
      second = second.next;
    }

    return second.value;
  }

  reverse() {
    let prev = null;
    let curr = this.head;
    let next = null;

    for (let i = 0; i < this.listSize; i++) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }

    this.head = prev;
  }

  removeValue(value) {
    let prev = null;
    let temp = this.head;

    // 1 --> 2 --> 3
    for (let i = 0; i < this.listSize; i++) {
      if (temp.value === value) {
        prev.next = temp.next;
        break;
      }

      prev = temp;
      temp = temp.next;
    }

    this.listSize--;
  }
}

module.exports = {
  LinkedList,
  ListNode,
};