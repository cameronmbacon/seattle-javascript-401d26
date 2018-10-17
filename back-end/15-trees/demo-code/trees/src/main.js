'use strict';

// class Node {
//   constructor(value) {
//     this.left = null;
//     this.right = null;
//     this.value = value;
//   }
// }
//
// class BinaryTree {
//   constructor(root = null) {
//     this.root = root;
//   }
// }
//
// const one = new Node(1);
// const two = new Node(2);
// const three = new Node(3);
// const four = new Node(4);
// const five = new Node(5);
// const six = new Node(6);
// const seven = new Node(7);
// const eight = new Node(8);
// const nine = new Node(9);
// const ten = new Node(10);
//
// const tree = new BinaryTree(ten);
//
// ten.left = nine;
// ten.right = eight;
//
// nine.left = seven;
//
// eight.left = six;
//
// six.left = five;
// six.right = four;
//
// const preOrderTraversal = (root) => {
//   if (!root) {
//     return undefined;
//   }
//   //--------------------------------------------------------------
//   // Perform any operations I want with the root
//   //--------------------------------------------------------------
//   console.log(`I am visiting a node with value ${root.value}`);
//   //--------------------------------------------------------------
//   // Traverse
//   //--------------------------------------------------------------
//   preOrderTraversal(root.left);
//   preOrderTraversal(root.right);
//   return undefined;
//   //--------------------------------------------------------------
// };
//
// const inOrderTraversal = (root) => {
//   if (!root) {
//     return undefined;
//   }
//   inOrderTraversal(root.left);
//   console.log(`I am visiting a node with value ${root.value}`);
//   inOrderTraversal(root.right);
//   return undefined;
//   //--------------------------------------------------------------
// };
//
// const postOrdertraversal = (root) => {
//   if (!root) {
//     return undefined;
//   }
//   postOrdertraversal(root.left);
//   postOrdertraversal(root.right);
//   console.log(`i am visiting a node with value ${root.value}`);
//   return undefined;
//   //--------------------------------------------------------------
// };
//
// preOrderTraversal(tree.root);


const array = [1, 2, 3, 4, 5];


const recursiveArrayCount = (array) => {
  //! Vinicio - all validation will happen here
  //! Vinicio - these returns are important. This is how we keep track of values in between recursive calls.
  return recursiveArrayCountHelperDivideAndConquer(array, 0);
};

//! Vinicio - in recursive functions we always need to keep track of our location.
//! recursive bread crumbs
//! CAVEAT: recursive functions usually DO NOT validate input.
const recursiveArrayCountHelperCallStack = (array, currentIndex, counter) => {
  //! Vinicio - every recursive function has 2 parts: Base Case and Recursive Case
  //! Base case is the code that runs when you stop calling yourself.
  //! Recursive case is the code that runs when you call yourself
  // ---------------------------------------------------------------------
  // BASE CASE
  // ---------------------------------------------------------------------
  // ! Vinicio - in the base case we usually return something
  if (array.length - 1 === currentIndex) {
    //! Vinicio - these returns are important. This is how we keep track of values in between recursive calls.
    return counter + 1;
  }
  // ---------------------------------------------------------------------
  // RECURSIVE CASE
  // ---------------------------------------------------------------------
  //! Vinicio - in the recursive case, as the name implies, we recursively call our function
  //! Vinicio - these returns are important. This is how we keep track of values in between recursive calls.
  return recursiveArrayCountHelper(array, currentIndex + 1, counter + 1);
  // ---------------------------------------------------------------------
};

const recursiveArrayCountHelperDivideAndConquer = (array, currentIndex) => {
  // ---------------------------------------------------------------------
  // BASE CASE
  // ---------------------------------------------------------------------
  // Vinicio - I usually recommend that you always start by the base case
  if (array.length - 1 === currentIndex) {
    //! Vinicio - these returns are important. This is how we keep track of values in between recursive calls.
    return 1;
  }
  // ---------------------------------------------------------------------
  // RECURSIVE CASE
  // ---------------------------------------------------------------------
  return 1 + recursiveArrayCountHelperDivideAndConquer(array, currentIndex + 1);
  // ---------------------------------------------------------------------
};

console.log(recursiveArrayCount(array));
