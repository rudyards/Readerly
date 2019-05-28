var Pin = require('../models/pin');
var request = require('request');

const googleRoot = 'https://maps.googleapis.com/maps/api/place/'
const goodreadsRoot = 'https://www.goodreads.com/search/index.xml?'


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
    request(goodreadsRoot + 'key=' + process.env.GOODREADS_API + '&q=' + req.body.book, 
        function(err, response, body){
            console.log(body);
        });

    // var pin = new Pin(req.body);
    // pin.save(function(err){
    //     if (err) return res.render('pins/new');;
    //     res.redirect('/pins')
    // })
    res.redirect('/pins')
}
