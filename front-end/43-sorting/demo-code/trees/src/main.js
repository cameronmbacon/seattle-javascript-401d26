'use strict';

// const _merge = (preSortedLeft, preSortedRight) => {
//   const sortedValues = [];
//   //------------------------------------------------------------
//   // 2 LISTS
//   //------------------------------------------------------------
//   while (preSortedLeft.length > 0 && preSortedRight.length > 0) {
//     if (preSortedLeft[0] <= preSortedRight[0]) {
//       sortedValues.push(preSortedLeft.shift());//! Vinicio - not very efficient
//     } else {
//       sortedValues.push(preSortedRight.shift());//! Vinicio - not very efficient
//     }
//   }
//   //------------------------------------------------------------
//   // 1 EMPTY list and one full list
//   //------------------------------------------------------------
//   if (preSortedLeft.length > 0) {
//     sortedValues.push(...preSortedLeft);//! Vinicio - not very efficient
//   }
//   if (preSortedRight.length > 0) {
//     sortedValues.push(...preSortedRight);
//   }
//   //------------------------------------------------------------
//   return sortedValues;
// };
//
// //! VINICIO - THIS CODE IS MEANT TO BE EASY TO UNDERSTAND, BUT NOT VERY
// // EFFICIENT. THERE ARE MANY WAYS TO IMPROVE THIS SPECIFIC CODE.
// const _mergeSortHelper = (items) => {
//   //------------------------------------------------------------------------
//   // BASE CASE
//   //------------------------------------------------------------------------
//   if (items.length === 1) {
//     //! Vinicio - if I'm the only person in the room, I'm the smartest person in the room
//     return items;
//   }
//   //------------------------------------------------------------------------
//   // RECURSIVE CASE
//   //------------------------------------------------------------------------
//   const middleIndex = Math.floor(items.length / 2);
//
//   //! Vinicio - this slice is what makes the code slow, BUT removing them takes
//   // mental gymnastics.
//   const leftItems = items.slice(0, middleIndex);
//   const rightItems = items.slice(middleIndex);
//
//   //! Vinicio - _mergeSortHelper is going down
//   //! Vinicio - merge happens when you come up
//   return _merge(_mergeSortHelper(leftItems),
//     _mergeSortHelper(rightItems));
// };
//
// const mergeSort = (items) => {
//   if (!Array.isArray(items)) {
//     throw new TypeError('Input should be an array');
//   }
//
//   if (items.length <= 1) {
//     return items;
//   }
//
//   return _mergeSortHelper(items);
// };
//
//
// console.log(mergeSort([4,2,1,10,11,-1,-2,-0,8,]));


//! Vinicio - we need this function in order to avoid creating copies of the array
//! O(1) time and space
const _swap = (items, indexA, indexB) => {
  const temp = items[indexA];

  items[indexA] = items[indexB];
  items[indexB] = temp;
};

//! Vinicio - this function picks a pivot and 'moves' the elements based on the pivot
const _partition = (items, leftIndex, rightIndex) => {
  //! Vinicio - this is a 'random' pivot, but we can always randomize it more
  const pivotIndex = rightIndex;
  let firstHighIndex = leftIndex;

  for (let i = leftIndex; i < rightIndex; i++) {
    if (items[i] < items[pivotIndex]) {
      //! Vinicio - this element belongs to the left of FIRST HIGH
      _swap(items, i, firstHighIndex);
      firstHighIndex += 1;
    }
    //! Vinicio - this elements belongs to right of FIRST HIGH
  }
  _swap(items, pivotIndex, firstHighIndex);
  return firstHighIndex;
};

const _quickSortHelper = (items, leftIndex, rightIndex) => {
  if (rightIndex > leftIndex) {
    //! Vinicio - process the array
    const pivotIndex = _partition(items, leftIndex, rightIndex);
    //! 1 - selecting a pivot
    //! 2 - moving everything smaller than the pivot to the left of the pivot
    //! 2 - moving everything bigger or equal than the pivot to the right of the pivot
    _quickSortHelper(items, leftIndex, pivotIndex - 1);
    _quickSortHelper(items, pivotIndex + 1, rightIndex);
  }
};

const quicksort = (items) => {
  if (!Array.isArray(items)) {
    throw new TypeError('Input should be an array');
  }
  //! Vinicio - start by looking at the ENTIRE array
  return _quickSortHelper(items, 0, items.length - 1);
};


const array = [3,2,1,6,5,8,9,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2];

quicksort(array);

console.log(array);

