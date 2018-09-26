'use strict';

const mongoose = require('mongoose');

// class Note {
//   constructor(title, content) {
//     this.id = uuid();
//     this.timestamp = new Date();
//
//     this.title = title;
//     this.content = content;
//   }
// }

const noteSchema = mongoose.Schema({
  timestamp: {
    type: Date,
    default: () => new Date(),
  },
  title: {
    type: String,
    required: true,
    unique: true,
  },
  content: {
    type: String,
    required: true,
    minlength: 10,
  },
});


module.exports = mongoose.model('note', noteSchema);
