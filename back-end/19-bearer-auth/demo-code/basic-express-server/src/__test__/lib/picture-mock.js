'use strict';

const faker = require('faker');
const Picture = require('../../model/picture');
const accountMock = require('./account-mock');

const pictureMock = module.exports = {};

pictureMock.pCreatePictureMock = () => {
  const resultMock = {};
  //! Vinicio - by the end, our mock will contain:
  // - an account
  // - a picture
  return accountMock.pCreateMock()
    .then((mockedAccount) => {
      resultMock.account = mockedAccount;
      return new Picture({
        title: faker.lorem.words(3),
        url: faker.internet.url(),
        account: mockedAccount.account._id,
      }).save();
    })
    .then((createdPicture) => {
      resultMock.picture = createdPicture;
      return resultMock;
    });
};

pictureMock.pCleanPictureMock = () => {
  return Promise.all([
    Picture.remove({}),
    accountMock.pCleanAccountMocks(),
  ]);
};
