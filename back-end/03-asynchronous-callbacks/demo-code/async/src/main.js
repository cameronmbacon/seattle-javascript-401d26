'use strict';

const fileReader = require('./lib/file-reader');

const litanyPath = `${__dirname}/data/litany.txt`;
const ulyssesPath = `${__dirname}/data/ulysses.txt`;
const mobyDickPath = `${__dirname}/data/moby-dick.txt`;
const sherlockPath = `${__dirname}/data/sherlock.txt`;
const prideAndPrejudicePath = `${__dirname}/data/pride-and-pred.txt`;

const CHARACTERS_TO_READ = 128;
const printString = (string) => {
  console.log(string);
  console.log('------------------------------------------');
};
// --------------------------------------------------------------------
// NAIVE EXECUTION
// --------------------------------------------------------------------
// fileReader.readFirstNCharactersAsync(mobyDickPath, CHARACTERS_TO_READ, (mobyDick) => {
//   printString(mobyDick);
// });
//
// fileReader.readFirstNCharactersAsync(litanyPath, CHARACTERS_TO_READ, (litany) => {
//   printString(litany);
// });
// --------------------------------------------------------------------
// FORCE SEQUENTIAL EXECUTION
// --------------------------------------------------------------------
// fileReader.readFirstNCharactersAsync(mobyDickPath, CHARACTERS_TO_READ, (mobyDick) => {
//   printString(mobyDick);
//   fileReader.readFirstNCharactersAsync(litanyPath, CHARACTERS_TO_READ, (litany) => {
//     printString(litany);
//   });
// });
// --------------------------------------------------------------------
// FORCE SEQUENTIAL EXECUTION WITH FIVE FILES
// --------------------------------------------------------------------
fileReader.readFirstNCharactersAsync(mobyDickPath, CHARACTERS_TO_READ, (mobyDick) => {
  printString(mobyDick);
  fileReader.readFirstNCharactersAsync(litanyPath, CHARACTERS_TO_READ, (litany) => {
    printString(litany);
    fileReader.readFirstNCharactersAsync(ulyssesPath, CHARACTERS_TO_READ, (ulysses) => {
      printString(ulysses);
      fileReader.readFirstNCharactersAsync(sherlockPath, CHARACTERS_TO_READ, (sherlock) => {
        printString(sherlock);
        fileReader.readFirstNCharactersAsync(prideAndPrejudicePath, CHARACTERS_TO_READ, (pride) => {
          printString(pride);
        });
      });
    });
  });
});
