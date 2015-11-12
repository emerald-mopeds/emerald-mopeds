var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var partials = require('express-partials');
var handle = require('./request-handler.js');

app.all("/*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  return next();
});

app.configure(function() {
  app.set('views', __dirname + '/../client/views');
  app.set('view engine', 'ejs');
  app.use(partials());
  app.use(bodyParser.json());
  app.use(express.static(__dirname + '/../client'));
});

app.get('/', function (req, res) {
  handle.fetchJobs(req, res);
});

app.post('/jobs', function (req, res) {
  handle.addJob(req, res);
});

app.post('/add', function (req, res) {
  handle.addJob(req, res);
});

app.post('/login', function (req, res) {
  handle.loginUser(req, res);
});

app.post('/signup', function (req, res) {
  handle.signupUser(req, res);
});

app.use(function (error, req, res, next) {
  console.error(error.stack);
  next(error);
});

app.use(function (error, req, res, next) {
  res.send(500, {error: error.message});
});

var port = process.env.PORT || 3000;

app.listen(port);


