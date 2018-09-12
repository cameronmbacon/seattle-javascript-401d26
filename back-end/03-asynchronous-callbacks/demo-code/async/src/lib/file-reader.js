'use strict';

const fs = require('fs');

const fileReader = module.exports = {};
//! Vinicio - in a different file I'll import file-reader by doing...
//! require('file-reader');


fileReader.readFirstNCharactersAsync = (filePath, characters, callback) => {
  console.log(`Reading ${filePath}`);

  return fs.readFile(filePath, (error, data) => {
    if (error) {
      console.log('__ERROR__ We could not read your file');
      console.log(error);
      return error;
    }
    //! Vinicio - This code is the one running my callbacks
    //! This is called , in CS, inversion of control
    //! In this line, I could do a lot of 'dangerous' activities with callback
    return callback(data.toString('utf8', 0, characters));
  });
};
