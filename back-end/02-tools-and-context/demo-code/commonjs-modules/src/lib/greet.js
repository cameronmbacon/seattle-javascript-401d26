'use strict';

const greet = module.exports = {};

//! vinicio - gregor can ONLY be used in this file
greet.sayHi = (name) => {
  //! Vinicio - Error checking is important in EVERY function

  if (name === '' || typeof name !== 'string') {
    //! Vinicio - here you can either deal with the error yourself OR throw the error
    throw new TypeError('name should be a string');
    //! Vinicio - throw can be seen as a return statement optimized for errors
  }
  return `Hello ${name}`; //! Unit 2 - String
};

greet.sayBye = () => {
  return 'We never say bye to 401';
};
