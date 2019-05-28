var Pin = require('../models/pin')


module.exports = {
    index,
    new: newPin,
    create
}

function index(req, res){
    Pin.find({}, function(err, pins){
        res.render('pins/index', {title: 'Pins List', pins})
    })
}

function newPin(req, res) {
  res.render('pins/new', {title: 'Add Pin'});
}

function create(req, res){
    var pin = new Pin(req.body);
    pin.save(function(err){
        if (err) return res.render('pins/new');;
        res.redirect('/pins')
    })
}
