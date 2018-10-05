'use strict';

const HttpError = require('http-errors');
const Account = require('../model/account');

module.exports = (request, response, next) => {
  //! 1 - check for headers
  if (!request.headers.authorization) {
    return next(new HttpError(400, 'AUTH - invalid request'));
  }
  //! 2 - if we have the right headers - parse the header
  const base64Header = request.headers.authorization.split('Basic ')[1];

  if (!base64Header) {
    return next(new HttpError(400, 'AUTH - invalid request'));
  }

  const stringAuthHeader = Buffer.from(base64Header, 'base64').toString();
  //! At this point, stringAuthHeader like this: 'username:password';

  const [username, password] = stringAuthHeader.split(':');

  if (!username || !password) {
    return next(new HttpError(400, 'AUTH - invalid request'));
  }
  //! 3 - Find user
  return Account.findOne({ username }) //! { username : 'gregor'}
    .then((account) => {
      //! 4 Verify user
      if (!account) { //! Vinicio - here we are checking if we could *actually* find an account
        return next(new HttpError(400, 'AUTH - invalid request'));
      }
      //! Vinicio - here, I can assume that I found a valid account with the provided username
      return account.pVerifyPassword(password);
    })
    .then((matchedAccount) => {
      //! Vinicio - here is when we are making changes to the request
      //! Vinicio - by convention, IF the request has an account, the user could
      // authenticate himself / herself
      request.account = matchedAccount;
      return next();
    })
    .catch(next);
};
