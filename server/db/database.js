var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

// mongoURI = 'mongodb://localhost/lancealot';
mongoURI = process.env.MONGOLAB_URI || 'mongodb://localhost/lancealot';
mongoose.connect(mongoURI);

// Run in seperate terminal window using 'mongod'
var db = mongoose.connection;

autoIncrement.initialize(db);

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
 console.log('Mongodb connection open');
});

module.exports = db;
