// Controller for Entries

// GET '/' - renders entries index page

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
  res.render(
    'entries/show',
    {
      title: 'WDInstagram',
      show:  true,
      entry: {
        id:         1,
        author:     'Joey B.',
        date_taken:  moment('2014-01-07').format('MMM D, YYYY'),
        photo_url:  'https://pbs.twimg.com/media/B1nnX3sIYAAYG9K.jpg:large'
      }
    }
  );
};
