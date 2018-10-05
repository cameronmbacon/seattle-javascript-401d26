'use strict';

const BST = require('./lib/binary-search-tree');

class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}


const myBST = new BST();

myBST.insert(new Node(10));
myBST.insert(new Node(5));
myBST.insert(new Node(15));
myBST.insert(new Node(3));
myBST.insert(new Node(11));

for (let i = 0; i < 20; i++) {
  myBST.insert(new Node(100 + i));
}


myBST.find(6);
console.log(myBST.steps);
myBST.find(119);
console.log(myBST.steps);
