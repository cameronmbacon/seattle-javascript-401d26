'use strict';

const fs = require('fs');

const fileReader = module.exports = {};

fileReader.readFirstNCharactersAsync = (arrayPath, callback) => {
  const returnArray = [];

  console.log(`Reading ${arrayPath}`);

  fs.readFile(arrayPath[0], (error, data) => {
    if (error) {
      callback(error, null);
    }
    returnArray.push(data.toString());

    fs.readFile(arrayPath[1], (error, data) => {
      if (error)  {
        callback(error, null);
      }
      returnArray.push(data.toString());

      fs.readFile(arrayPath[2], (error, data) => {
        if (error) {
          callback(error, null);
        }
        returnArray.push(data.toString());

        if (returnArray[2]) {
          callback(null, returnArray);
        }
      });
    });
  });
};
