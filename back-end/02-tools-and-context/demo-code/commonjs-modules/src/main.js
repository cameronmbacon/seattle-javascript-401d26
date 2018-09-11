'use strict';

function TaggedObject(name = 'Gregor is the coolest', age = 0) {
  this.id = Math.random();
  this.timestamp = new Date();
  this.name = name;
  this.age = age;
}

// ---------------------------------------------------------------------------------
// USING NEW
// ---------------------------------------------------------------------------------
//! Vinicio - New is making an empty object, and using it as the value of 'this'
const taggedObjectWithNew = new TaggedObject('Gregor', 1); //! taggetObjectWithNew.this = {};
console.log(taggedObjectWithNew);
// ---------------------------------------------------------------------------------
// USING CALL
// ---------------------------------------------------------------------------------
const myCustomContext = {
  source: 'call',
}; //! Vinicio - this object becomes the value of this
TaggedObject.call(myCustomContext, 'Gregor', 12);
console.log(myCustomContext);
// ---------------------------------------------------------------------------------
// USING APPLY
// ---------------------------------------------------------------------------------
const myCustomContextForApply = {
  source: 'apply',
}; //! Vinicio - this object becomes the value of this
TaggedObject.apply(myCustomContextForApply, ['Gregor', 12]);
console.log(myCustomContextForApply);
// ---------------------------------------------------------------------------------
// USING BIND
// ---------------------------------------------------------------------------------
const contextToBeSet = {
  source: 'Bind',
};

const boundTaggedobject = TaggedObject.bind(contextToBeSet);
console.log(contextToBeSet);
boundTaggedobject(); //! Vinicio - this call has a value of this that has been pre-applied by bind
console.log(contextToBeSet);
// ---------------------------------------------------------------------------------
// USING BAD PRACTICES
// ---------------------------------------------------------------------------------
//! Vinicio - the value of this NEED sto be set by someone (new, call,apply, bind)
// TaggedObject(); //! Vinicio - this is the best to get a a free conversation with your manager
// //! Vinicio - the global context is the window object in a browser
// console.log(id);
// console.log(name);
// console.log(age);
// console.log(timestamp);
// ---------------------------------------------------------------------------------
