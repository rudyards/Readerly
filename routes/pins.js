var express = require('express');
var router = express.Router();
var pinsCtrl = require('../controllers/pins');
var request = require('request');

const googleRoot = 'https://maps.googleapis.com/maps/api/place/'
const goodreadsRoot = 'https://www.goodreads.com/search/index.xml?'



router.get('/new', pinsCtrl.new);
router.post('/create', pinsCtrl.create);
router.get('/', pinsCtrl.index);


module.exports = router;
