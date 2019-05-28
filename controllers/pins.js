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
    Pin.find({}, function(err, pins){
        res.render('pins/index', {title: 'Pins List', pins})
    })
}

function newPin(req, res) {
  res.render('pins/new', {title: 'Add Pin'});
}

function create(req, res){
    var book;
    var bookName;
    var location;
    var locationName;
    request(booksRoot + req.body.book, 
        function(err, response, body){
            // console.log(body);
            book = JSON.parse(body);
            bookName = book.items[0].volumeInfo.title
        });
    request(mapsRoot + process.env.GOOGLE_API_KEY + "&input="+req.body.location+"&inputtype=textquery",
        function(err, response, body){
            var placeId = JSON.parse(body);
            placeId = placeId.candidates[0].place_id;
            // console.log(locationRoot+process.env.GOOGLE_API_KEY+'&placeid'+placeId)
            request(locationRoot+process.env.GOOGLE_API_KEY+'&placeid='+placeId,
                function(err, response, thisbody){
                    location = JSON.parse(thisbody);
                    locationName = location.result.name;
                    var pin = new Pin();
                    pin.book = book;
                    pin.location = location;
                    pin.bookName = bookName;
                    pin.locationName = locationName;
                    pin.save(function(err){
                        if (err) return res.render('pins/new');
                        res.redirect('/pins');
                    })
                })
        });
}
