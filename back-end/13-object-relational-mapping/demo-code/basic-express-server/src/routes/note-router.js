'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const HttpError = require('http-errors');

//! Vinicio - I'm using capital N because Note is a class
const Note = require('../model/note');
const logger = require('../lib/logger');

const jsonParser = bodyParser.json();
const router = module.exports = new express.Router();

// const storageById = []; //! Vinicio - easy access
// const storageByHash = {}; //! Vinicio - fast access

//! Vinicio - this route is going to be used to CREATE notes
//! Vinicio - this can be seen as the final 'node' in the middleware linked list
router.post('/api/notes', jsonParser, (request, response, next) => {
  return new Note(request.body).save()
    .then((savedNote) => {
      logger.log(logger.INFO, 'Responding with a 200 status code');
      return response.json(savedNote);
    })
    .catch(next);
});

router.get('/api/notes/:id', (request, response, next) => {
  return Note.findById(request.params.id)
    //! Vinicio - mongoose will resolve whether or not it can find a Note
    .then((note) => {
      if (note) {
        logger.log(logger.INFO, 'Responding with a 200 status code and a note');
        return response.json(note);
      }
      logger.log(logger.INFO, 'Responding with a 404 status code. Note not Found');
      return next(new HttpError(404, 'note not found'));
    })
    .catch(next); //! Vinicio - by default a catch gets an error as the first argument
  //! Vinicio - mongoose will only reject in case of error
  // (not finding a note IS NOT CONSIDERED AN ERROR)
});


// router.delete('/api/notes/:id', (request, response, next) => {
//   logger.log(logger.INFO, `Trying to delete an object with id ${request.params.id}`);
//
//   if (storageByHash[request.params.id]) {
//     logger.log(logger.INFO, 'We found the right element to remove');
//     const indexToRemove = storageById.indexOf(request.params.id);
//     storageById.splice(indexToRemove, 1);
//     delete storageByHash[request.params.id];
//     return response.sendStatus(204);
//   }
//   return next(new HttpError(404, 'The note was not found'));
// });
//
// router.put('/api/notes/:id', jsonParser, (request, response, next) => {
//   logger.log(logger.INFO, `Trying to update an object with id ${request.params.id}`);
//
//   if (storageByHash[request.params.id]) {
//     logger.log(logger.INFO, 'We found the right element to update');
//     if (request.body.title) {
//       storageByHash[request.params.id].title = request.body.title;
//     }
//     if (request.body.content) {
//       storageByHash[request.params.id].content = request.body.content;
//     }
//     return response.json(storageByHash[request.params.id]);
//   }
//   return next(new HttpError(404, 'The note was not found'));
// });
