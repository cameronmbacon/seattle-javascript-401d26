'use strict';

class Node(){
  constructor() {
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
    this.steps = 0;
  }

  // Time : O(H) -> O(lg n)
  // Space : O(H) -> O(lg n)
  insert(nodeToInsert) {
    if (!this.root) {
      this.root = nodeToInsert;
    } else {
      this._insert(this.root, nodeToInsert);
    }
  }

  _insert(rootNode, nodeToInsert) {
    // Vinicio -  1 - do I have to go left?
    if (nodeToInsert.value < rootNode.value) {
      if (!rootNode.left) {
        rootNode.left = nodeToInsert;
      } else {
        this._insert(rootNode.left, nodeToInsert);
      }
    } else if (!rootNode.right) {
      // Vinicio - 2 - can I move to the right branch?
      rootNode.right = nodeToInsert;
    } else {
      // Moving to the right branch
      this._insert(rootNode.right, nodeToInsert);
    }
  }


  // Time : O(H) -> O(lg n)
  // Space : O(1) (Because we don't use recursion
  find(value) { //! Vinicio - this is what we know as 'binary search'
    if (!this.root) {
      return null;
    }

    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }
      if (currentNode.value < value) {
        currentNode = currentNode.right;
      } else {
        currentNode = currentNode.left;
      }
    }
    //! Vinicio - here I know that I couldn't find my value
    return null;
  }
}

module.exports = BinarySearchTree;
