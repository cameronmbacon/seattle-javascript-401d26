'use strict';

const greet = require('./lib/greet');

try {
  console.log(greet.sayHi('Gregor'));
  console.log(greet.sayHi('Gregor'));
  console.log(greet.sayHi('Gregor'));
  console.log(greet.sayHi('Gregor'));
  console.log(greet.sayHi('Gregor'));
  console.log(greet.sayHi('Gregor'));
  console.log(greet.sayHi('Gregor'));
  console.log(greet.sayHi('Gregor'));
  console.log(greet.sayHi('Gregor'));
  console.log(greet.sayHi('Gregor'));
} catch (exception) {
  //! Vinicio - here I'm going to write code to deal with the error
  // COMPLEX COOOODE
  console.log('__ERROR__ THere was an error :(');
} finally {
  console.log('Have a nice day!');
}

//! Vinicio - error code like this was very common in the past
// if(greet.sayHi(28) === -1) {
//   console.log('__ERROR__ We could not run the function');
// }
greet.sayBye();
