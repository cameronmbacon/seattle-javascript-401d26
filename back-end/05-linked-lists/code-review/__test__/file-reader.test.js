'use strict';

const fileReader = require('../lib/reader');

const pathOne = `${__dirname}/../data/korean.txt`;
const pathTwo = `${__dirname}/../data/sandwich.txt`;
const pathThree = `${__dirname}/.../data/sushi.txt`;

describe('file-reader.js', () => {
  test('To see if the the input is a string or array', (done) => {
    return fileReader.readFirstNCharactersAsync([pathOne, pathTwo, pathThree], (error, data) => {
      expect(data).toEqual(typeof 'array');
      done();
    });
  });

  test('Call text files in order regardless of size', (done) => {
    return fileReader.readFirstNCharactersAsync([pathOne, pathTwo, pathThree], (error, data) => {
      expect(data).toEqual(['\'Oh korean food, how I love thee.\n'
                + 'Everything about it, I honestly wish I was related to korean grandma.\n'
                + 'She would whip up all my favorite dishes.\n'
                + 'Especially a kimchi pancake.', ' \'My favorite thing when traveling is going to a good sandwich shop.\n'
                + ' There are only few in Seattle that I\'ve been to that are so good.\',\'Sushi, what can I say.\n'
                + 'My first time eating sushi was in 2011.\n'
                + 'I was blown away at how tasty it was.\n'
                + 'I still however can\'t eat sashimi.']);
      done();
    });
  });
});
