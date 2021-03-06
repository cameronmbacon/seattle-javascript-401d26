'use strict';

const HttpError = require('http-errors');
const jsonWebToken = require('jsonwebtoken');
const Account = require('../model/account');

/**
 *
 * @param callbackStyleFunction
 * @param args - any arguments we need to pass to callBackStyleFunction
 * @returns
 */
const promisify = callbackStyleFunction => (...args) => {
  return new Promise((resolve, reject) => {
    callbackStyleFunction(...args, (error, data) => {
      if (error) {
        return reject(error); // Vinicio - .catch
      }
      return resolve(data); // Vinicio -  .then
    });
  });
};


module.exports = (request, response, next) => {
  if (!request.headers.authorization) {
    return next(new HttpError(400, 'AUTH - invalid request'));
  }

  const token = request.headers.authorization.split('Bearer ')[1];

  if (!token) {
    return next(new HttpError(400, 'AUTH - invalid request'));
  }
  return promisify(jsonWebToken.verify)(token, process.env.SECRET)
    .then((decryptedToken) => {
      return Account.findOne({ tokenSeed: decryptedToken.tokenSeed });
    })
    .then((account) => {
      if (!account) {
        return next(new HttpError(400, 'AUTH - invalid request'));
      }
      request.account = account; //! Vinicio - YES! You are authorized to use the route
      return next();
    })
    .catch(next); //! Vinicio - GO AWAY!
};
