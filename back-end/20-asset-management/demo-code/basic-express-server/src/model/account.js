'use strict';

const mongoose = require('mongoose');
const crypto = require('crypto'); // Vinicio - Random bytes
const jsonWebToken = require('jsonwebtoken'); // Vinicio - crypto
const bcrypt = require('bcrypt'); // Vinicio - hashing
const HttpError = require('http-errors');

const accountSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  tokenSeed: {
    type: String,
    required: true,
    unique: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },
});

const TOKEN_SEED_LENGTH = 128;

function pVerifyPassword(plainTextPassword) {
  // Vinicio - in this function the value of this will be the current accountSchema I'm using.
  // .email .tokenSeed .passwordHash .username

  //! Vinicio - behind this scenes, bcrypt is hashing!!!
  return bcrypt.compare(plainTextPassword, this.passwordHash)
    .then((compareResult) => {
      if (!compareResult) {
        throw new HttpError(401, 'Unauthorized');
      }
      return this; // Vinicio - this refers to the current object I'm looking at
    })
    .catch(console.error);
}

function pCreateToken() {
  // Vinicio - the value of this in this function is equal to the specific
  // object we are working with
  this.tokenSeed = crypto.randomBytes(TOKEN_SEED_LENGTH).toString('hex');
  // Vinicio - at this point, token seed is a random, 'unique', long string
  return this.save()
    .then((savedAccount) => {
      // Vinicio - at this point, we KNOW the tokenSeed was unique
      // Vinicio - sign, in this context, means encrypt
      return jsonWebToken.sign({
        tokenSeed: savedAccount.tokenSeed,
      }, process.env.SECRET);
    })
    .catch((error) => {
      throw error;
    });
}
// Vinicio - adding pCreateToken to the account's prototype
accountSchema.methods.pCreateToken = pCreateToken;
accountSchema.methods.pVerifyPassword = pVerifyPassword;

const Account = module.exports = mongoose.model('account', accountSchema);

// Vinicio - on a production system, this would be >=9
const HASH_ROUNDS = 8;

Account.create = (username, email, password) => {
  return bcrypt.hash(password, HASH_ROUNDS)
    .then((passwordHash) => {
      password = null; // eslint-disable-line
      const tokenSeed = crypto.randomBytes(TOKEN_SEED_LENGTH).toString('hex');
      return new Account({
        username,
        email,
        tokenSeed,
        passwordHash,
      }).save();
    });
};
