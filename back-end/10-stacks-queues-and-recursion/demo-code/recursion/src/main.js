'use strict';

// const arrayIntersection = (arrayA, arrayB) => { //! O(n + n) = O(n)
//   //! Vinicio - Validation
//   const helperMap = {};
//   const intersection = [];
//
//   //! O(n)
//   for (let i = 0; i < arrayA.length; i++) {
//     helperMap[arrayA[i]] = true;//! O(1)
//   }
//
//   //! O(n)
//   for (let i = 0; i < arrayB.length; i++) {
//     if (helperMap[arrayB[i]]) { //! O(1)
//       intersection.push(arrayB[i]);//! O(1)
//     }
//   }
//   return intersection;//! O(1)
// };
//
//


// const hacking = (linkedList) => {
//   const array = [];
//
//   let currentNode = linkedList.head;
//
//   while(currentNode.next) {
//     array.push(currentNode);
//     currentNode = currentNode.next;
//   }
//
//   for (let i = array.length -1;)
// };
// const bigO1Space = (bigArray) => {
//   let gregor = 'cute'; // 1
//   let hound = 'likes to bite'; // 1
//   let demi = 'dog'; //
//   for (let i = 0; i < bigArray.length; i++) { // 1
//     for (let i = 0; i < bigArray.length; i++) { // 1
//       console.log(bigArray[i]);
//     }
//   }
// }; //Space: O(4) = O(1)
//
// const bigONSpace = (bigArray) => {
//   const copy = []; // Space: O(1)
//   for (let i = 0; i < bigArray.length; i++) { //Space: O(n)  Time: O(n)
//     copy.push(bigArray[i]);
//   }
//   console.log(copy.length);
// };
//
//
// bigONSpace([1, 2, 4, 5, 6]);


// const simpleLoop = () => { // O(1) time and O(1)
//   for (let i = 0; i < 10; i++) {
//     console.log(i);
//   }
// };
//
// const simpleRecursion = (counter) => { // O(1) space O(1)
//   // --------------------------------------------
//   // BASE CASE
//   // --------------------------------------------
//   if (counter >= 10) {
//     return undefined;
//   }
//   // --------------------------------------------
//   // RECURSIVE CASE
//   // --------------------------------------------
//   console.log(counter);
//   simpleRecursion(counter += 1);
// };

//simpleRecursion(0);
//simpleLoop();


// const addition = (a, b) => { // O(1) time and space
//   return a + b;
// };


const recursiveAddition = (a, b) => { // O(B) Space O(B) Time
  if (b === 0) {
    return a;
  }
  return recursiveAddition(a + 1, b - 1);
};

console.log(recursiveAddition(0, 100));

// const sampleArray = [1 ,2 ,3];
// let sum = 0;
//
// for (let i = 0; i < sampleArray.length; i++) {
//   sum += sampleArray[i];
// }
//
// console.log(sum);
//
// const recursiveArrayAddition = (array) => {
//   return recursiveArrayAdditionHelper(array, 0);
// };

// const recursiveArrayAdditionHelper = (array, currentIndex, sumSoFar) => {
//   //! Vinicio - Base case
//   if (currentIndex === array.length - 1) {
//     //! Vinicio - this should be the last function call
//     return array[currentIndex] + sumSoFar;
//   }
//   return recursiveArrayAdditionHelper(array, currentIndex + 1, sumSoFar + array[currentIndex]);
//   //! Vinicio - Recursive Case
// };

// const recursiveArrayAdditionHelper = (array, currentIndex) => {
//   if (currentIndex === array.length - 1) {
//     //! Vinicio - this is the LAST call of the function
//     return array[currentIndex];
//   }
//
//   //! Vinicio - recursive case
//   const restOfTheProblem = recursiveArrayAdditionHelper(array, currentIndex + 1);
//   return array[currentIndex] + restOfTheProblem;
// };
//
// console.log(recursiveArrayAddition([1, 2, 3]));


// class Stack{
//   constructor() {
//     //! Vinicio - we are not supposed to use internalStorage directly
//     this.internalStorage = [];
//   }
//
//   push(value) {
//     this.internalStorage.unshift(value);
//   }
//
//
//   pop(value) {
//     return this.internalStorage.shift(value);
//   }
//
//   //! Vinicio - using ONLY push and pop guarantees LIFO
// }



class AnimalShelter(){
  constructor(){
    this.cats = new Queue();
    this.dogs = new Queue();
    this.serial = 0;
  }

  enqueue(animal){
    animal.serial = serial; // new Date();
    serial++;
    // insert into queues
  }
}

