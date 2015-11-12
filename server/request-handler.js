var request = require('request');
var bcrypt = require('bcrypt-nodejs');
var util = require('utility');

var db = require('db/database');
var Job = require('db/models/job');

exports.fetchJobs = function(req, res) {
  Job.find({}).exec(function(err, jobs) {
    res.send(200, jobs);
  })
};

exports.addJob = function(req, res) {
  var newJob = new Job({
    client: req.body.client,
    rate: req.body.rate,
    start: req.body.start,
    end: req.body.end,
    status: req.body.end,
    description: req.body.description
  });
  newJob.save(function(err, newJob) {
    if (err) {
      res.send(500, err);
    } else {
      res.send(200, newJob);
    }
  });

exports.loginUser = function(req, res) {
  var username = req.body.username;
  var password = req.body.password;

  User.findOne({ username: username })
    .exec(function(err, user) {
      if (!user) {
        res.redirect('/login');
      } else {
        User.comparePassword(password, user.password, function(err, match) {
          if (match) {
            util.createSession(req, res, user);
          } else {
            res.redirect('/login');
          }
        });
      }
  });
};

exports.signupUser = function(req, res) {
  var username = req.body.username;
  var password = req.body.password;

  User.findOne({ username: username })
    .exec(function(err, user) {
      if (!user) {
        var newUser = new User({
          username: username,
          password: password
        });
        newUser.save(function(err, newUser) {
          if (err) {
            res.send(500, err);
          }
          util.createSession(req, res, newUser);
        });
      } else {
        console.log('Account already exists');
        res.redirect('/signup');
      }
    });
};  