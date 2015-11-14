var db = require('../database');
var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

var clientSchema = mongoose.Schema({
  _id: Number, 
  name: String,
  address: String,
  phone: String
});

clientSchema.plugin(autoIncrement.plugin, 'Client');

var Client = mongoose.model('Client', clientSchema);

module.exports = Client;