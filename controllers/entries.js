// Controller for Entries

// GET '/' - renders entries index page

module.exports.renderEntriesIndex = function(req, res, next){
  res.render('entries/index', {title: 'WDInstagram,'});
};
