'use strict'; //! Vinicio - this is your best friend in Javascript
const arrayReverse = {};

/**
 *
 * @param arr
 * @param number
 * @returns {*}
 *
 * example valid test params
 * const inputArray = [1, 2, 3, 4, 5, 7, 8, 9, 10];
 * const inputNumber = 24;
 * input any array to reverse the order
 */
arrayReverse.runShift = function insertShiftArray(arr, number) {
  // validation
  if (!Array.isArray(arr)) {
    return null;
  }

  const newArr = [number];
  const getMiddleIndex = Math.round(arr.length / 2);
  for (let restOfArr = getMiddleIndex; restOfArr <= arr.length - 1; restOfArr++) {
    newArr.push(arr[restOfArr]);
  }
  const ogArrSliced = arr.slice(0, getMiddleIndex);
  return ogArrSliced.concat(newArr);
};

module.exports = arrayReverse;
