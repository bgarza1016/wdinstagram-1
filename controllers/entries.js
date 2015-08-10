// Controller for Entries

// GET '/' - renders entries index page
var Entry = require('../models/entry');

module.exports.renderEntriesIndex = function(req, res, next){
  Entry.find({}, function (err,entries))
  res.render(
      'entries/index',
            {
                title: 'WDInstagram,',
                entries: entries
            }
        );
    });

module.exports.renderEntriesShow = function(req, res, next) {
    Entry.findById(req.params.id, function(err,entry){
    res.render(
          'entries/show',
          {
              title: 'WDInstagram',
              show: true,
              entry: entry
          }
      );

    });
};
