![CF](./assets/array_shift.JPG) coding-challenge-02: array_shift
===
# Summary
array_shift.js is a clean and reusable module for taking a single numeric value and placing it in the center of an array of numbers.

### Prerequisites

Define an array with as many numbers as you'd like and a separate single number to input into the center. These are taken in as parameters.

Example:
```
var myTestArr = [4,8,15,23,42];
var myTestNum = 16;

insertShiftArray(myTestArr, myTestNum);
```

### Tests Performed with Jest
- Params#2 is NaN
- Param#1 is not an array
- Param#1's array has other values than a number
- Param#1/#2 are null (or missing)

### Installing

To use this in your code:

- git clone repo 
- npm install 
- require('../src/lib/array_shift')

## Built With

* Vanilla JS
* Eslint
* jest

## Contributing

Please feel free to contribute. Master branch auto merge locked for approval.

## Versioning

*n/a*

## Authors

![CF](http://i.imgur.com/7v5ASc8.png) **Benjamin West** 

## License

*none*
