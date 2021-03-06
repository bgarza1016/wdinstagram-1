/*var express = require('express');
var router = express.Router();
var entriesController = require('./controllers/entries');

router.get('/entries', entriesController.renderEntriesIndex);

//Index
router.get('/entries', function(req, res, next){
  Entry.find(function(error, entries){
    if (error) return res.send(error);
    res.render('index', {title: 'entries'})
  });
});

//NEW
router.get('/entries/new', function(req, res, next){
  respone.render('new', {title: 'New entry'});
});

//SHOW
router.get('/entries/:id', function(req,res, next){
  Entry.findOne({_id: req.params.id}, function(error,entry){
  if (error) return res.send(error);
  res.render('show', {title: entry.author, entry: entry });
  })
});

//create
router.post('/entries', function(req,res,next){
  var entry = new Entry();
  entry.author = req.body.author;
  entry.entry_url = req.body.entry_url;
  entry.date_taken = req.body.date_taken;

  Entry.save(function(error){
    if(error) return res.send(error);
    res.redirect('/entries');
  });
});*/

var express = require('express');
var router = express.Router();
var entriesController = require('../controllers/entries');

/* GET '/' - render entries index view */
router.get('/', entriesController.renderEntriesIndex);
router.get('/entries', entriesController.renderEntriesIndex);
router.get('/entries/new', entriesController.renderEntriesNew);
router.get('/entries/:id', entriesController.renderEntriesShow);

// Post to entries views
router.post('/entries', entriesController.renderEntriesCreate);

// Likes function
router.get('/entries/:id/like', entriesController.renderEntriesLike);

module.exports = router;
