'use strict';

const fileReader = require('../lib/file-reader');

const litanyPath = `${__dirname}/../data/litany.txt`;

describe('#file-reader.js', () => {
  test('The first 5 characters of a file should be read', (done) => {
    return fileReader.readFirstNCharactersAsync(litanyPath, 5, (data) => {
      expect(data).toEqual('I mus');
      done();
    });
  });
});
