'use strict';

const faker = require('faker');
const Account = require('../../model/account');

const accountMock = module.exports = {};

accountMock.pCreateMock = () => {
  //! Vinicio - what do we need to create an account mock?
  // Account
  // TOKEN --> We'll worry about this later
  const mock = {};
  mock.request = {
    username: faker.internet.userName(),
    password: faker.internet.password(),
    email: faker.internet.email(),
  };

  return Account.create(mock.request.username, mock.request.email, mock.request.password)
    .then((createdAccount) => {
      //! Vinicio - if you use a function in a mock that mutates an account (or any model)
      //! and you want that model in your mock, you'll need to re-query for the model. (using
      //! findbyId or findOne)
      mock.account = createdAccount;
      return createdAccount.pCreateToken();
    })
    .then((token) => {
      mock.token = token;
      return mock;
    })
    .catch((error) => {
      console.error(error);
    });
};

accountMock.pCleanAccountMocks = () => Account.remove({});
