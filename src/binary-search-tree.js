const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  root() {
    return this._root || null;
    // remove line with error and write your code here
  }

  add(data) {
    const newNode = { data, left: null, right: null };

    if (!this._root) {
      this._root = newNode;
      return;
    }

    let currentNode = this._root;
    while (currentNode) {
      if (data < currentNode.data) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return;
        }
        currentNode = currentNode.right;
      }
    }
    // remove line with error and write your code here
  }

  has(data) {
    let currentNode = this._root;
    while (currentNode) {
      if (data === currentNode.data) {
        return true;
      }
      if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return false;
    // remove line with error and write your code here
  }

  find(data) {
    let currentNode = this._root;
    while (currentNode) {
      if (data === currentNode.data) {
        return currentNode;
      }
      if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return null;
    // remove line with error and write your code here
  }

  remove(data) {
    function removeNode(node, data) {
      if (!node) return null;
      
      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          return node.right;
        }
        if (!node.right) {
          return node.left;
        }
  
        let minNode = findMinNode(node.right);
        node.data = minNode.data;
        node.right = removeNode(node.right, minNode.data);
        return node;
      }
    }
  
    function findMinNode(node) {
      while (node.left) {
        node = node.left;
      }
      return node;
    }
  
    this._root = removeNode(this._root, data);
    // remove line with error and write your code here
  }

  min() {
    if (!this._root) return null;

    let currentNode = this._root;
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.data;
    // remove line with error and write your code here
  }

  max() {
    if (!this._root) return null;

    let currentNode = this._root;
    while (currentNode.right) {
      currentNode = currentNode.right;
    }
    return currentNode.data;
  }
    // remove line with error and write your code here
}

module.exports = {
  BinarySearchTree
};