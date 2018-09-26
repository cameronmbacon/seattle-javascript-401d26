'use strict';

const faker = require('faker');
const superagent = require('superagent');
const server = require('../lib/server');
const noteMock = require('./lib/note-mock');

//! Vinicio - setting up the testing port, by HAND
const API_URL = `http://localhost:${process.env.PORT}/api/notes`;

describe('/api/notes', () => {
  beforeAll(server.start);
  afterAll(server.stop);
  beforeEach(noteMock.pCleanNoteMocks);

  test('should respond with 200 status code and a new json note', () => {
    const originalRequest = {
      title: faker.lorem.words(3),
      content: faker.lorem.words(15),
    };
    return superagent.post(API_URL)
      .set('Content-Type', 'application/json')
      .send(originalRequest)
      .then((response) => {
        expect(response.status).toEqual(200);
        expect(response.body.content).toEqual(originalRequest.content);
        expect(response.body.title).toEqual(originalRequest.title);

        expect(response.body.timestamp).toBeTruthy();
        expect(response.body._id.toString()).toBeTruthy();
      });
  });
  // test('should respond with 400 status code if there is no title', () => {
  //   return superagent.post(API_URL)
  //     .set('Content-Type', 'application/json')
  //     .send({ //! Vinicio .send returns a promise
  //       content: 'is cute',
  //     })
  //     .then(Promise.reject)
  //     .catch((response) => {
  //       expect(response.status).toEqual(400);
  //     });
  // });
  //
  test('should respond with 200 status code and a json note if there is a matching id', () => {
    let savedNoteMock = null;
    return noteMock.pCreateNoteMock()
      .then((createdNoteMock) => {
        savedNoteMock = createdNoteMock;
        return superagent.get(`${API_URL}/${createdNoteMock._id}`);
      })
      .then((getResponse) => {
        expect(getResponse.status).toEqual(200);

        expect(getResponse.body.timestamp).toBeTruthy();
        expect(getResponse.body._id.toString()).toEqual(savedNoteMock._id.toString());
        expect(getResponse.body.title).toEqual(savedNoteMock.title);
      });
  });
  //
  // test('should respond with 204 if we remove a note', () => {
  //   const originalRequest = {
  //     title: faker.lorem.words(5),
  //     content: faker.lorem.words(5),
  //   };
  //   return superagent.post(API_URL)
  //     .set('Content-Type', 'application/json')
  //     .send(originalRequest)
  //     .then((postResponse) => {
  //       originalRequest.id = postResponse.body.id;
  //       return superagent.delete(`${API_URL}/${postResponse.body.id}`);
  //     })
  //     .then((getResponse) => {
  //       expect(getResponse.status).toEqual(204);
  //     });
  // });
  //
  // test('should respond with 404 if there is no note to remove', () => {
  //   return superagent.delete(`${API_URL}/invalidID-gregor-is-cute`)
  //     .then(Promise.reject)
  //     .catch((getResponse) => {
  //       expect(getResponse.status).toEqual(404);
  //     });
  // });
  //
  // test('should respond with 204 if we updated a note', () => {
  //   const originalRequest = {
  //     title: faker.lorem.words(5),
  //     content: faker.lorem.words(5),
  //   };
  //   return superagent.post(API_URL)
  //     .set('Content-Type', 'application/json')
  //     .send(originalRequest)
  //     .then((postResponse) => {
  //       originalRequest.id = postResponse.body.id;
  //       return superagent.put(`${API_URL}/${postResponse.body.id}`)
  //         .send({
  //           title: 'GREGOR IS CUTE',
  //         });
  //     })
  //     .then((putResponse) => {
  //       expect(putResponse.status).toEqual(200);
  //       expect(putResponse.body.id).toEqual(originalRequest.id);
  //
  //       expect(putResponse.body.title).toEqual('GREGOR IS CUTE');
  //       expect(putResponse.body.content).toEqual(originalRequest.content);
  //     });
  // });
});
