var express = require('express');
var router = express.Router();
var pinsCtrl = require('../controllers/pins');



router.get('/new', pinsCtrl.new);
router.post('/create', pinsCtrl.create)


module.exports = router;
