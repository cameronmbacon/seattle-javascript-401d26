'use strict';

class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }
}

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
const five = new Node(5);
const six = new Node(6);
const seven = new Node(7);
const eight = new Node(8);
const nine = new Node(9);

const tree = new BinaryTree(one);

one.left = two;
one.right = three;

three.left = four;
three.right = five;

two.left = six;
six.right = seven;

seven.left = eight;
seven.right = nine;

const preOrderTraversal = (root) => {
  if (!root) {
    return undefined;
  }
  //--------------------------------------------------------------
  // Perform any operations I want with the root
  //--------------------------------------------------------------
  console.log(`I am visiting a node with value ${root.value}`);
  //--------------------------------------------------------------
  // Traverse
  //--------------------------------------------------------------
  preOrderTraversal(root.left);
  preOrderTraversal(root.right);
  return undefined;
  //--------------------------------------------------------------
};

const inOrderTraversal = (root) => {
  if (!root) {
    return undefined;
  }
  inOrderTraversal(root.left);
  console.log(`I am visiting a node with value ${root.value}`);
  inOrderTraversal(root.right);
  return undefined;
  //--------------------------------------------------------------
};

const postOrdertraversal = (root) => {
  if (!root) {
    return undefined;
  }
  postOrdertraversal(root.left);
  postOrdertraversal(root.right);
  console.log(`i am visiting a node with value ${root.value}`);
  return undefined;
  //--------------------------------------------------------------
};

preOrderTraversal(tree.root);
