'use strict';

const superagent = require('superagent');
const server = require('../lib/server');
// const pictureMock = require('./lib/picture-mock');
const accountMock = require('./lib/account-mock');

//! Vinicio - setting up the testing port, by HAND
const API_URL = `http://localhost:${process.env.PORT}/api/picture`;

describe('/api/categories', () => {
  beforeAll(server.start);
  afterAll(server.stop);
  //! Vinicio - please remember to clear picture mocks here as well now!
  beforeEach(accountMock.pCleanAccountMocks);

  test('should respond with 200 status code and a picture', () => {
    return accountMock.pCreateMock()
      .then((mock) => {
        return superagent.post(API_URL)
          .set('Authorization', `Bearer ${mock.token}`)
          .field('title', 'Sir Gregor, the mountain that purrs and BANANA')
          .attach('picture', `${__dirname}/assets/gregor.jpg`);
      })
      .then((response) => {
        expect(response.status).toEqual(200);
        //! Vinicio - HERE WE HAVE TO TEST A LOT MORE
      });
  });
});
