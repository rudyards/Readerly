var mongoose = require('mongoose');
var Pin = ('./models/pin');
// optional shortcut to the mongoose.Schema class
var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: String,
    googleId: String,
    friends: Array,
    pins: [{type: Schema.Types.ObjectId, ref: 'Pin'}]
})


module.exports = mongoose.model('User', userSchema);