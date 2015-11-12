var db = require('../database');
var mongoose = require('mongoose');

var jobSchema = mongoose.Schema({
 id: Number,
 client: String,
 rate: Number,
 start: Date,
 end: Date,
 status: String
});

var Job = mongoose.model('Job', jobSchema);


module.exports = Job;