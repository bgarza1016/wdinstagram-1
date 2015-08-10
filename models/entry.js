// Entry model

// The Post model

var mongoose = require('mongoose')
  ,Schema = mongoose.Schema
  ,ObjectId = Schema.ObjectId;
});
var moment = require('moment');

var entrySchema = new Schema({
   author: String,
   photo_url: {type: String, default: 'Anon'},
   date_taken: {type: Date, default: Date.now}
});

// var Beer = mongoose.model('Entry', {
//   author: String,
//   photo_url: {type: String, default: 'Anon'},
//   date_taken: {type: Date, default: Date.now} default: Date.now
// }


module.exports = mongoose.model('Entry', entrySchema);
