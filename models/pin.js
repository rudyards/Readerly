var mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
var Schema = mongoose.Schema;

var pinSchema = new Schema({
    book: Object,
    bookName: String,
    location: Object,
    locationName: String
})


module.exports = mongoose.model('Pin', pinSchema);