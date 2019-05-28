var Pin = require('../models/pin')


module.exports = {
    new: newPin,
    create
}

function newPin(req, res) {
  res.render('pins/new', {title: 'Add Pin'});
}

function create(req, res){
    console.log("Attempting");

}
