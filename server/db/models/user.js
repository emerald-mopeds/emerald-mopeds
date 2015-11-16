var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var userSchema = mongoose.Schema({
  email: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true },
  api_token: String
});

var User = mongoose.model('User', userSchema);

module.exports = User;
