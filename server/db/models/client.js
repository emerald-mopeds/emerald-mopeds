var db = require('../database');
var mongoose = require('mongoose');

var clientSchema = mongoose.Schema({
 name: String,
 address: String,
 phone: String
});

var Client = mongoose.model('Client', clientSchema);


module.exports = Client;