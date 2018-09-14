'use strict';

//! Vinicio  - this function is O(1)
const functionA = (inputArray) => {
  let numberOfOperations = 0;
  for (let i = 0; i < 10; i++) {
    console.log(i);
    numberOfOperations += 1;
  }
  console.log(numberOfOperations);
};

//! Vinicio - this function is O(n)
const functionB = (inputArray) => {
  let numberOfOperations = 0;
  for (let i = 0; i < inputArray.length; i++) {
    console.log(i);
    numberOfOperations += 1;
  }
  console.log(numberOfOperations);
};

//! Vinicio - this function is O(n^2)
const functionC = (inputArray) => {
  let numberOfOperations = 0;
  for (let i = 0; i < inputArray.length; i++) { // O(n)
    for (let i = 0; i < inputArray.length; i++) { // O(n)
      let gregor = inputArray.indexOf(5); // O(n)
      console.log(i); // O(1)
      numberOfOperations += 1; // O(1)
    }
  }
  console.log(numberOfOperations);
};

const inputArray = [1, 2, 3, 3, 1, 2, 3, 3, 1, 2, 3, 3, 1, 2, 3, 3, 1, 2, 3, 3, 1, 2, 3, 3];

functionA(inputArray);
functionB(inputArray);
functionC(inputArray);
