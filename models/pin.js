var mongoose = require('mongoose');
var User = ('./models/model');
// optional shortcut to the mongoose.Schema class
var Schema = mongoose.Schema;

var pinSchema = new Schema({
    book: Object,
    bookName: String,
    location: Object,
    locationName: String,
    pagesRead: String,
    user: {type: Schema.Types.ObjectId, ref: 'User'}
}, {
    timestamps: true
});


module.exports = mongoose.model('Pin', pinSchema);