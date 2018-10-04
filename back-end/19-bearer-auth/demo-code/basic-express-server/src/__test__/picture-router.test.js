'use strict';

const faker = require('faker');
const superagent = require('superagent');
const server = require('../lib/server');
// const pictureMock = require('./lib/picture-mock');
const accountMock = require('./lib/account-mock');

//! Vinicio - setting up the testing port, by HAND
const API_URL = `http://localhost:${process.env.PORT}/api/picture`;

describe('/api/categories', () => {
  beforeAll(server.start);
  afterAll(server.stop);
  beforeEach(accountMock.pCleanAccountMocks);

  test('should respond with 200 status code and a picture', () => {
    return accountMock.pCreateMock()
      .then((mock) => {
        return superagent.post(API_URL)
          .set('Authorization', `Bearer ${mock.token}`)
          .send({
            title: faker.lorem.words(3),
            url: faker.internet.url(),
            //! Vinicio - the account id will be tied by the route itself.
          });
      })
      .then((response) => {
        expect(response.status).toEqual(200);
        //! Vinicio - HERE WE HAVE TO TEST A LOT MORE
      });
  });
});
