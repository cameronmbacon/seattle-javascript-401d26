'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const HttpError = require('http-errors');

//! Vinicio - I'm using capital N because Note is a class
const Note = require('../model/note');
const logger = require('../lib/logger');

const jsonParser = bodyParser.json();
const router = module.exports = new express.Router();

const storageById = []; //! Vinicio - easy access
const storageByHash = {}; //! Vinicio - fast access

//! Vinicio - this route is going to be used to CREATE notes
//! Vinicio - this can be seen as the final 'node' in the middleware linked list
router.post('/api/notes', jsonParser, (request, response, next) => {
  if (!request.body) {
    return next(new HttpError(400, 'body is required'));
  }
  //! Vinicio - making sure I have all the information I need to create a new note
  if (!request.body.title) {
    return next(new HttpError(400, 'title is required'));
  }

  if (!request.body.content) {
    return next(new HttpError(400, 'content is required'));
  }
  //----------------------------------------------------------------------------------
  // NOTE CREATION
  //----------------------------------------------------------------------------------
  const note = new Note(request.body.title, request.body.content);
  storageById.push(note.id);
  storageByHash[note.id] = note;

  logger.log(logger.INFO, 'Responding with a 200 status code and a json abject');
  logger.log(logger.INFO, storageById);
  logger.log(logger.INFO, storageByHash);
  return response.json(note);
});

router.get('/api/notes/:id', (request, response, next) => {
  logger.log(logger.INFO, `Trying to get an object with id ${request.params.id}`);
  //----------------------------------------------------------------------------------
  // NOTE RETRIEVAL
  //----------------------------------------------------------------------------------
  if (storageByHash[request.params.id]) {
    logger.log(logger.INFO, 'Responding with a 200 status code and json data');
    return response.json(storageByHash[request.params.id]); // O(1)
  }
  return next(new HttpError(404, 'The note was not found'));
});


router.delete('/api/notes/:id', (request, response, next) => {
  logger.log(logger.INFO, `Trying to delete an object with id ${request.params.id}`);

  if (storageByHash[request.params.id]) {
    logger.log(logger.INFO, 'We found the right element to remove');
    const indexToRemove = storageById.indexOf(request.params.id);
    storageById.splice(indexToRemove, 1);
    delete storageByHash[request.params.id];
    return response.sendStatus(204);
  }
  return next(new HttpError(404, 'The note was not found'));
});

router.put('/api/notes/:id', jsonParser, (request, response, next) => {
  logger.log(logger.INFO, `Trying to update an object with id ${request.params.id}`);

  if (storageByHash[request.params.id]) {
    logger.log(logger.INFO, 'We found the right element to update');
    if (request.body.title) {
      storageByHash[request.params.id].title = request.body.title;
    }
    if (request.body.content) {
      storageByHash[request.params.id].content = request.body.content;
    }
    return response.json(storageByHash[request.params.id]);
  }
  return next(new HttpError(404, 'The note was not found'));
});
