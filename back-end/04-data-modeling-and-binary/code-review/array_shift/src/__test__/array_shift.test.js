'use strict';

const arrayShift = require('../lib/array-shift');

describe('Running the _array_shift.runShift method.', () => {
  //! Vinicio - this is what we call the 'happy path'
  test('shift: That valid params ( [ ... , ... , ... ], number ), do not return null.', () => {
    expect(arrayShift.runShift([4, 5, 7, 2, 1, 9, 10], 24)).toEqual([4, 5, 7, 2, 24, 1, 9, 10]);
  });
  //! Vinicio - I would add an explict test with [] , [1]
  //--------------------------------------------------------------------------------------------
  //! Vinicio - this is what we call error states or edge cases
  test('shift: If param1 is not an array, that it returns null.', () => {
    expect(arrayShift.runShift('array, of, strings', 9)).toEqual(null);
  });
  test('shift: If param2 is not NaN, that it returns null.', () => {
    expect(arrayShift.runShift([1, 2, 3, 4, 5, 7, 8], '9')).toEqual(null);
  });
  test('shift: If the array has any values that are NaN, that it returns null.', () => {
    expect(arrayShift.runShift([1, 2, 3, 4, 'a', 9, 10, 19], 30)).toEqual(null);
  });
});
