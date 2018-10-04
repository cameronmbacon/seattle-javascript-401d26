'use strict';

const mongoose = require('mongoose');

const pictureSchema = mongoose.Schema({
  timestamp: {
    type: Date,
    default: () => new Date(),
  },
  title: {
    type: String,
    required: true,
    unique: true,
  },
  url: {
    type: String,
    required: true,
    // unique: true, //! Vinicio - this would mean that there can only be ONE picture
    // with the same name in the application.
  },
  account: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    // unique: true, //! Vinicio - this would mean that a user can have ONLY one picture
  },
});

module.exports = mongoose.model('picture', pictureSchema);
