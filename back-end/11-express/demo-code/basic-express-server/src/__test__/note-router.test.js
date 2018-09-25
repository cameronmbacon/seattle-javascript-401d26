'use strict';

process.env.PORT = 4000;

const faker = require('faker');
const superagent = require('superagent');
const server = require('../lib/server');

//! Vinicio - setting up the testing port, by HAND
const API_URL = `http://localhost:${process.env.PORT}/api/notes`;

describe('/api/notes', () => {
  beforeAll(server.start);
  afterAll(server.stop);

  test('should respond with 200 status code and a new json note', () => {
    return superagent.post(API_URL)
      .set('Content-Type', 'application/json')
      .send({ //! Vinicio .send returns a promise
        title: 'Gregor',
        content: 'is cute',
      })
      .then((response) => {
        expect(response.status).toEqual(200);
        expect(response.body.content).toEqual('is cute');
        expect(response.body.title).toEqual('Gregor');

        expect(response.body.timestamp).toBeTruthy();
        expect(response.body.id).toBeTruthy();
      });
  });
  test('should respond with 400 status code if there is no title', () => {
    return superagent.post(API_URL)
      .set('Content-Type', 'application/json')
      .send({ //! Vinicio .send returns a promise
        content: 'is cute',
      })
      .then(Promise.reject)
      .catch((response) => {
        expect(response.status).toEqual(400);
      });
  });

  test('should respond with 200 status code and a json note if there is a matching id', () => {
    const originalRequest = {
      title: faker.lorem.words(5),
      content: faker.lorem.words(5),
    };
    return superagent.post(API_URL)
      .set('Content-Type', 'application/json')
      .send(originalRequest)
      .then((postResponse) => {
        //! Vinicio - now I'm going send another request to get the object I just got
        //! Vinicio - I'm making a request to something that looks like this
        //!           localhost:4000/api/notes/65ba91e0-c02c-11e8-86a8-b5ee386eec53
        //! If you see this code at work, propose the use of MOCK OBJECTS
        originalRequest.id = postResponse.body.id;
        return superagent.get(`${API_URL}/${postResponse.body.id}`);
      })
      .then((getResponse) => {
        expect(getResponse.status).toEqual(200);

        expect(getResponse.body.timestamp).toBeTruthy();
        expect(getResponse.body.id).toEqual(originalRequest.id);


        expect(getResponse.body.title).toEqual(originalRequest.title);
      });
  });

  test('should respond with 204 if we remove a note', () => {
    const originalRequest = {
      title: faker.lorem.words(5),
      content: faker.lorem.words(5),
    };
    return superagent.post(API_URL)
      .set('Content-Type', 'application/json')
      .send(originalRequest)
      .then((postResponse) => {
        originalRequest.id = postResponse.body.id;
        return superagent.delete(`${API_URL}/${postResponse.body.id}`);
      })
      .then((getResponse) => {
        expect(getResponse.status).toEqual(204);
      });
  });

  test('should respond with 404 if there is no note to remove', () => {
    return superagent.delete(`${API_URL}/invalidID-gregor-is-cute`)
      .then(Promise.reject)
      .catch((getResponse) => {
        expect(getResponse.status).toEqual(404);
      });
  });

  test('should respond with 204 if we updated a note', () => {
    const originalRequest = {
      title: faker.lorem.words(5),
      content: faker.lorem.words(5),
    };
    return superagent.post(API_URL)
      .set('Content-Type', 'application/json')
      .send(originalRequest)
      .then((postResponse) => {
        originalRequest.id = postResponse.body.id;
        return superagent.put(`${API_URL}/${postResponse.body.id}`)
          .send({
            title: 'GREGOR IS CUTE',
          });
      })
      .then((putResponse) => {
        expect(putResponse.status).toEqual(200);
        expect(putResponse.body.id).toEqual(originalRequest.id);

        expect(putResponse.body.title).toEqual('GREGOR IS CUTE');
        expect(putResponse.body.content).toEqual(originalRequest.content);
      });
  });
});
