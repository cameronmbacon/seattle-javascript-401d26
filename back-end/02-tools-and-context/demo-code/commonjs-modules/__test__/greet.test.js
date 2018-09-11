'use strict';

const greet = require('../src/lib/greet');

describe('#greet', () => {
  describe('#sayHi', () => {
    test('sayHi should return an exception in case of error', () => {
      expect(() => greet.sayHi(23)).toThrow();
    });
    test('return value should be Hello NAME, if the input argument is a string', () => {
      const output = greet.sayHi('Gregor');
      expect(output).toEqual('Hello Gregor');
    });
  });
  describe('#sayBye', () => {
    test('sayBye should return "We never say bye to 401" in all cases', () => {
      const output = greet.sayBye();
      expect(output).toEqual('We never say bye to 401');
    });
  });
});
