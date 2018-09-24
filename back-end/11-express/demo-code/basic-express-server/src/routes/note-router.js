'use strict';

const express = require('express');
const bodyParser = require('body-parser');

//! Vinicio - I'm using capital N because Note is a class
const Note = require('../model/note');
const logger = require('../lib/logger');

const jsonParser = bodyParser.json();
const router = module.exports = new express.Router();

const storageById = []; //! Vinicio - easy access
const storageByHash = {}; //! Vinicio - fast access

//! Vinicio - this route is going to be used to CREATE notes
router.post('/api/notes', jsonParser, (request, response) => {
  logger.log(logger.INFO, 'Processing a POST request on /api/notes');
  if (!request.body) {
    logger.log(logger.INFO, 'Responding with a 400 status code');
    return response.sendStatus(400);
  }
  //! Vinicio - making sure I have all the information I need to create a new note
  if (!request.body.title) {
    logger.log(logger.INFO, 'Responding with a 400 status code');
    return response.sendStatus(400);
  }

  if (!request.body.content) {
    logger.log(logger.INFO, 'Responding with a 400 status code');
    return response.sendStatus(400);
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

router.get('/api/notes/:id', (request, response) => {
  logger.log(logger.INFO, 'Processing a GET request on /api/notes');
  logger.log(logger.INFO, `Trying to get an object with id ${request.params.id}`);
  //----------------------------------------------------------------------------------
  // NOTE RETRIEVAL
  //----------------------------------------------------------------------------------
  if (storageByHash[request.params.id]) {
    logger.log(logger.INFO, 'Responding with a 200 status code and json data');
    return response.json(storageByHash[request.params.id]); // O(1)
  }
  logger.log(logger.INFO, 'Responding with a 404 status code. The note was not found');
  return response.sendStatus(404);
});
