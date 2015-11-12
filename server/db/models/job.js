var db = require('../database');
var mongoose = require('mongoose');

var jobSchema = mongoose.Schema({
 client: String,
 rate: Number,
 start: Date,
 end: Date,
 status: String,
 description: String
});

var Job = mongoose.model('Job', jobSchema);


module.exports = Job;