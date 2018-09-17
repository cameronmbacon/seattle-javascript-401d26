'use strict';

const createPromise = () => new Promise((resolve) => {
  //! Vinicio - resolve is a function
  //! Vinicio - reject is a function
  //! Vinicio - At some point, you are going to call EITHER resolve OR reject
  resolve(1);
  // reject(0);
});

const promiseDemo = () => {
  return createPromise() //! Pending STATE
    .then((value) => { //! Fullfilled
      console.log(value);
      //! Vinicio - then should be added only in case of:
      //! ajax request, readFile, API call
      return 1 + 100;
    })
    .then((value) => { //! Fulfilled
      console.log(value);
      return value * 2;
    })
    .then((value) => { //! Fulfilled
      console.log(value);
    })
    .catch((value) => { //! Rejected
      console.log(value);
    });
  //! Code right here will run with a promise state of PENDING
};

// -----------------------------------------------------------------------------------
// SIMPLE PROMISE USAGE
// -----------------------------------------------------------------------------------
// const promiseDemo = () => {
//   createPromise() //! This line creates a promise (async operation)
//     .then(value => {
//       console.log('Now, we have a value from the promise chain', value);
//     })
//     .catch(value => {
//       console.log('This will happen if there is an error in the promise');
//     });
//   //! Vinicio - this code will run immediately after line 12
// };

promiseDemo()
  .then(() => { //! Vinicio - I don't have an argument here, because i'm not using it
    console.log('The demo is over');
  });
