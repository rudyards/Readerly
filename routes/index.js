var express = require('express');
var router = express.Router();
var passport = require('passport');
var Pin = require('../models/pin');

/* GET home page. */
router.get('/', function(req, res, next) {
  if (req.user){
    var latLong = { lat: 34.0130, lng: -118.4952};
    Pin.findOne({user: req.user.id}).sort({_id: -1}).exec(function (err, pin){
      if (pin){
        latLong = pin.location.result.geometry.location;
        res.render('index', { title: 'Readerly', user: req.user, latLong});
      } else {
        res.render('index', { title: 'Readerly', user: req.user, latLong});
      }
    })
  } else {
    res.render('index', { title: 'Readerly', user: req.user });
  }
});

router.get('/auth/google', passport.authenticate(
   'google',
   { scope: ['profile', 'email'] }
 ));
 router.get('/oauth2callback', passport.authenticate(
   'google',
   {
     successRedirect : '/',
     failureRedirect : '/'
   }
 ));
 router.get('/logout', function(req, res){
   req.logout();
   res.redirect('/');
 });

module.exports = router;
