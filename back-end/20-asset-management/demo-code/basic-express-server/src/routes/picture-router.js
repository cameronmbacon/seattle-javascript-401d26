'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const HttpError = require('http-errors');
const multer = require('multer');
//! Vinicio - I'm using capital N because Category is a class
const Picture = require('../model/picture');
const bearerAuthMiddleware = require('../lib/bearer-auth-middleware');

// --------------------------------------------------------------------------
// UPLOAD
// --------------------------------------------------------------------------
const upload = multer({ dest: `${__dirname}/../temp` });
const s3 = require('../lib/s3');
// --------------------------------------------------------------------------

// const jsonParser = bodyParser.json();
const router = module.exports = new express.Router();


router.post('/api/picture', bearerAuthMiddleware, upload.any(), (request, response, next) => {
  // ---------------------------------------------------------------------------------------
  // AUTH
  // ---------------------------------------------------------------------------------------
  if (!request.account) {
    return next(new HttpError(400, 'bad request'));
  }
  // ---------------------------------------------------------------------------------------
  // VALIDATION
  // ---------------------------------------------------------------------------------------
  if (!request.body.title || request.files.length > 1) {
    return next(new HttpError(400, 'bad request'));
  }
  // ---------------------------------------------------------------------------------------
  // MULTER AND FILE UPLOAD
  // ---------------------------------------------------------------------------------------
  const file = request.files[0];
  //! file.filename  --> hasthed name --> 28341928374
  //! file.originalname  --> original name --> cat.png
  const key = `${file.filename}.${file.originalname}`;
  //! 823g4823479283.cat.png
  return s3.pUpload(file.path, key)
    .then((s3URL) => {
      return new Picture({
        title: request.body.title,
        url: s3URL,
        account: request.account._id,
        //! Vinicio - here is how I make sure nobody messes with my account system
      }).save();
    })
    .then(picture => response.json(picture))
    .catch(next);
  // ---------------------------------------------------------------------------------------
});
