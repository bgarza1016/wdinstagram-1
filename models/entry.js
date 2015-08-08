// Entry model
var mongoose = require('mongoose')


var Entry = mongoose.model('Entry',{
  author: String,
  entry_url: String,
  date_taken: String,
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.export = model;
