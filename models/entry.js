// Entry model

// The Post model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId,
  moment = require('moment');


// Grabbing time of action and putting it in appropriate format
var formatDate = function(date_taken) {
  return moment(date_taken).format('MMM D, YYYY');
};

// New entry schema for posts
var entrySchema = new Schema({
  author:     String,
  date_taken: {
    type:    Date,
    default: Date.now,
    get:     formatDate
  },
  photo_url:  String
});

module.exports = mongoose.model('Entry', entrySchema);
