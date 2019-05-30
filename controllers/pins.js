var Pin = require('../models/pin');
var request = require('request');

const mapsRoot = 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?key=';
const locationRoot = 'https://maps.googleapis.com/maps/api/place/details/json?key=';
const booksRoot = 'https://www.googleapis.com/books/v1/volumes?q='

module.exports = {
    index,
    new: newPin,
    create
}

function index(req, res){
    if (req.user){
        Pin.find({}, function(err, pins){
            res.render('pins/index', {title: 'Pins List', pins, user: req.user})
        })
    } else {
        res.redirect('/');
    }
}

function newPin(req, res) {
  if (req.user){
    res.render('pins/new', {title: 'Add Pin', user: req.user});
  } else {
    res.redirect('/');
  }
}

function create(req, res){
    var book;
    var bookName;
    var location;
    var locationName;
    request(booksRoot + req.body.book, 
        function(err, response, body){
            book = JSON.parse(body);
            bookName = book.items[0].volumeInfo.title;
        });
    request(mapsRoot + process.env.GOOGLE_API_KEY + "&input="+req.body.location+"&inputtype=textquery",
        function(err, response, body){
            var placeId = JSON.parse(body);
            console.log(placeId.status)
            if (placeId.status != 'ZERO_RESULTS'){
                placeId = placeId.candidates[0].place_id;
                } else {
                    placeId = 'ChIJy2q39wqzrYcRvh4OXJmsKq4';
                }
                request(locationRoot+process.env.GOOGLE_API_KEY+'&placeid='+placeId,
                    function(err, response, thisbody){
                        location = JSON.parse(thisbody);
                        locationName = location.result.name;
                        var pin = new Pin();
                        pin.book = book;
                        pin.location = location;
                        pin.bookName = bookName;
                        pin.locationName = locationName;
                        pin.user = req.user;
                        pin.save(function(err){
                            if (err) return res.render('pins/new', {user: req.user});
                            req.user.pins.push(pin);
                            res.status(301).redirect('/pins');
                        })
                    })

            
        });
}
