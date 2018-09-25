'use strict';

// require('dotenv').config();
// const server = require('./lib/server');
//
// server.start();


//! Vinicio - the API of this class is constructor / pop / push
//! Vinicio - the _storage array are internal detais
class Stack {
  constructor() {
    //! Vinicio - storage is going to used in a way that generates LIFO
    this._storage = [];
  }

  pop() {
    return this._storage.pop();
  }

  push(value) {
    this._storage.push(value);
  }
}
//
// const myStack = new Stack();
//
// myStack.push(1);
// myStack.push(2);
// myStack.push(3);
// myStack.push(4);
// myStack.push(5);
// myStack.push(6);

// console.log(myStack.pop());


// let poppedValue = null;

// while (poppedValue = myStack.pop()) { // eslint-disable-line
//   //! Vinicio - the key point is that you can ONLY use push and pop
//   console.log(poppedValue);
// }

// while (true) {
//   poppedValue = myStack.pop();
//   if (poppedValue) {
//     console.log(poppedValue);
//   } else {
//     break;
//   }
// }


// class Queue {
//   constructor() {
//     //! Vinicio - storage is going to used in a way that generates LIFO
//     this._storage = [];
//   }
//
//   dequeue() {
//     return this._storage.shift();
//   }
//
//   enqueue(value) {
//     this._storage.push(value);
//   }
// }
//
// const myQueue = new Queue();
//
// myQueue.enqueue(1);
// myQueue.enqueue(2);
// myQueue.enqueue(3);
// myQueue.enqueue(4);
// myQueue.enqueue(5);
// myQueue.enqueue(6);
//
// let dequeuedValue = null;

// while (dequeuedValue = myQueue.dequeue()) { // eslint-disable-line
//   //! Vinicio - the key point is that you can ONLY use push and pop
//   console.log(dequeuedValue);
// }

// while (true) {
//   dequeuedValue = myQueue.dequeue();
//   if (dequeuedValue) {
//     console.log(dequeuedValue);
//   } else {
//     break;
//   }
// }
