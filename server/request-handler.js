var bcrypt = require('bcrypt-nodejs');
var util = require('./utility');

var db = require('./db/database');
var Job = require('./db/models/job');
var Client = require('./db/models/client');



exports.fetchClients = function (req, res) {
  Client.find({}).exec(function (err, clients) {
    res.send(200, clients);
  });
};

exports.addClient = function (req, res) {
  var newClient = new Client({
    name: req.body.name,
    address: req.body.address,
    phone: req.body.phone
  });
  newClient.save(function (err, newClient) {
    if (err) {
      res.send(500, err);
    } else {
      res.send(200, newClient);
    }
  });
};

exports.fetchJobs = function (req, res) {
  Job.find({}).populate('client', 'name')
              .exec(function (err, jobs) {
                  res.send(200, jobs);
                  console.log('fetchJobs call: ', jobs);
              });
};

exports.addJob = function (req, res) {
  //find client id by client name
  Client.find({name:req.body.client}).exec(function (err, client){
    if(err){
      console.error('Error searching for client');
      res.send(500, err);
    } else {
    //create new job using id of found client as the client attribute
      var newJob = new Job({
        client: client[0]._id,
        rate: req.body.rate,
        start: req.body.start,
        end: req.body.end,
        status: req.body.status,
        description: req.body.description
      });
      newJob.save(function (err, newJob) {
        if (err) {
          res.send(500, err);
        } else {
          console.log('newJob: ', newJob);
          res.redirect('/jobs');
        }
      });
    };
  });
};

exports.loginUser = function (req, res) {
  var username = req.body.username;
  var password = req.body.password;

  User.findOne({ username: username })
    .exec(function (err, user) {
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

exports.signupUser = function (req, res) {
  var username = req.body.username;
  var password = req.body.password;

  User.findOne({ username: username })
    .exec(function (err, user) {
      if (!user) {
        var newUser = new User({
          username: username,
          password: password
        });
        newUser.save(function (err, newUser) {
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
