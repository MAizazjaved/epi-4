var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'EPIC 4' });
});

router.get('/payment_unsuccessful', function (req, res, next) {
  res.render('payment_unsuccessful',{title: 'epic 4'});
});

router.get('/welcome', function (req, res, next) {
  res.render('welcome',{title: 'epic 4'});
});



module.exports = router;
