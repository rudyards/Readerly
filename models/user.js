var mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: String,
    googleId: String
})


module.exports = mongoose.model('User', userSchema);