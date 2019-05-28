var express = require('express');
var router = express.Router();
var pinsCtrl = require('../controllers/pins');



router.get('/new', pinsCtrl.new);


module.exports = router;
