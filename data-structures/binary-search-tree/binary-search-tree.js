class BSTNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor(value = null) {
    this.root = value ? new BSTNode(value) : null;
  }

  insert(value, node = this.root) {
    if (this.root === null) {
      this.root = new BSTNode(value);
      return this.root;
    } else {
      if (node === null) {
        return new BSTNode(value);
      }
  
      if (value < node.value) {
        node.left = this.insert(value, node.left);
      } else if (value > node.value) {
        node.right = this.insert(value, node.right);
      }

      return node;
    }
  }

  getNodeCount() {
    let count = 0;
    let nodeQueue = [this.root];

    // Using breadth first first to
    // go through the tree and count values
    while (nodeQueue.length) {
      const currNode = nodeQueue.shift();
      count += currNode.value;

      if (currNode.left !== null) {
        nodeQueue.push(currNode.left);
      }

      if (currNode.right !== null) {
        nodeQueue.push(currNode.right);
      }
    }

    return count;
  }

  printValues() {
    let nodeQueue = [this.root];

    // Using breadth first first to
    // go through the tree and print values
    while (nodeQueue.length) {
      const currNode = nodeQueue.shift();
      console.log(currNode.value);

      if (currNode.left !== null) {
        nodeQueue.push(currNode.left);
      }

      if (currNode.right !== null) {
        nodeQueue.push(currNode.right);
      }
    }
  }

  deleteTree() {
    this.root = null;
  }

  isInTree(value, node = this.root) {
    if (node === null) {
      return false;
    }

    if (node.value === value) {
      return true;
    }

    if (value < node.value) {
      return this.isInTree(value, node.left);
    } else if (value > node.value) {
      return this.isInTree(value, node.right);
    }
  }

  getHeight(node = this.root, height = 0) {
    if (node === null) {
      return height - 1;
    }

    const leftHeight = this.getHeight(node.left, height + 1);
    const rightHeight = this.getHeight(node.right, height + 1);

    return Math.max(leftHeight, rightHeight);
  }


  getMinNode(node = this.root) {
    if (node.left === null) {
      return node;
    } else {
      return this.getMinNode(node.left);
    }
  }

  getMin(node = this.root) {
    if (node.left === null) {
      return node.value;
    } else {
      return this.getMin(node.left);
    }
  }

  getMax(node = this.root) {
    if (node.right === null) {
      return node.value;
    } else {
      return this.getMax(node.right);
    }
  }

  isBinarySearchTree(node = this.root) {
    if (node === null || (!node.left && !node.right)) {
      return true;
    }

    if ((node.left && node.left > node.value) || (node.right && node.right < node.value)) {
      return false;
    }

    return this.isBinarySearchTree(node.right) && this.isBinarySearchTree(node.right);
  }

  deleteValue(value, node = this.root) {
    if (node === null) {
      return null;
    }

    if (node.value === value) {
      if (!node.left && !node.right) {
        return null;
      }

      if ((node.left && !node.right) || (!node.left && node.right)) {
        return node.left || node.right;
      }

      if (node.left && node.right) {
        const minNode = this.getMinNode(node.right);
        node.value = minNode.value;

        // Delete duplicate
        node.right = this.deleteValue(node.value, node.right);

        return node;
      }
    }

    if (value < node.value) {
      node.left = this.deleteValue(value, node.left);
    } else if (value > node.value) {
      node.right = this.deleteValue(value, node.right);
    }

    return node;
  }

  getSuccessor() {}
}

module.exports = {
  BSTNode,
  BST,
}