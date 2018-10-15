'use strict';

const array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// Let's use row and column
for (let row = 0; row < array.length; row++) {
  for (let col = 0; col < array[row].length; col++) {
    console.log(array[row][col]);
  }
}

for (let col = 0; col < array[0].length; col++) {
  for (let row = 0; row < array.length; row++) {
    console.log(array[row][col]);
  }
}

// const BST = require('./lib/binary-search-tree');
//
// class Node {
//   constructor(value) {
//     this.left = null;
//     this.right = null;
//     this.value = value;
//   }
// }
//
//
// const myBST = new BST();
//
// myBST.insert(new Node(10));
// myBST.insert(new Node(5));
// myBST.insert(new Node(15));
// myBST.insert(new Node(3));
// myBST.insert(new Node(11));
//
// for (let i = 0; i < 20; i++) {
//   myBST.insert(new Node(100 + i));
// }
//
//
// myBST.find(6);
// console.log(myBST.steps);
// myBST.find(119);
// console.log(myBST.steps);
