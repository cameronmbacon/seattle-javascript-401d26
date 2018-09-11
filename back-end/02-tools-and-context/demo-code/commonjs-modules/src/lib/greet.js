'use strict';

const greet = module.exports = {};
//! vinicio - gregor can ONLY be used in this file
 greet.sayHi = (name) => {
  //! Vinicio - Error checking is important in EVERY function

   if(name === '' || typeof name !== 'string') {
    return -1; //! vinicio - something is wrong!
   }
   console.log(`Hello ${name}. This will be the **best** class ever`);
};

 greet.sayBye = () => {
  console.log('We never say bye to 401');
 };
