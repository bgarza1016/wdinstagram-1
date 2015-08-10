// Controller for Entries

// GET '/' - renders entries index page
var Entry = require('../models/entry');

// Index view
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

// Show view
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

// New View
module.exports.renderEntriesNew = function(req, res, next) {
  res.render(
    'entries/new',
    {
      title: 'WDInstagram',
      show:  true
    }
  );
};

// Create handler
module.exports.renderEntriesCreate = function(req, res, next) {
  Entry.create(req.body.entry, function (err, entry) {
    if (err) res.send('> '+ err);
    res.redirect('/entries/' + entry.id);
  });
};

// Likes handler
module.exports.renderEntriesLike = function(req, res, next) {
  Entry.findById(
    req.params.id,
    function (err, entry) {
      if (err) res.send('> '+ err);
        entry.likes++;
        entry.save(function(err) {
        if (err) console.log(err);
      });

      if (req.query.redirect === 'index') {
        res.redirect('/entries');
      } else {
        res.redirect('/entries/' + entry.id);
      }
    });
};
