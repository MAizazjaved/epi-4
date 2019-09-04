var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'EPIC 4' });
});

router.get('/payment_unsuccessful', function (req, res, next) {
  res.render('payment_unsuccessful',{title: 'Payment Unsuccessful'});
});

router.get('/welcome', function (req, res, next) {
  res.render('welcome',{title: 'Welcome'});
});

router.get('/Thankyou', function (req, res, next) {
  res.render('Thankyou',{title: 'Thankyou'});
});
router.get('/Action', function (req, res, next) {
  res.render('Action',{title: 'Call to Action'});
});




module.exports = router;
