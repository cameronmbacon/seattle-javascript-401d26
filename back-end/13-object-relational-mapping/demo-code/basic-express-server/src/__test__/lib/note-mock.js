'use strict';

const faker = require('faker');
const Note = require('../../model/note');

const noteMock = module.exports = {};

//! Vinicio - p is Vinicio's convention to know that the function will return promise.
noteMock.pCreateNoteMock = () => {
  return new Note({
    title: faker.lorem.words(10),
    content: faker.lorem.words(10),
  }).save(); //! Vinicio - this line is actually calling/using MONGO
};

noteMock.pCleanNoteMocks = () => {
  //! Vinicio - this line over here makes sure to clean the DB when we call it!
  return Note.remove({});
};
