var Job = require('./db/models/job');
var Client = require('./db/models/client');

exports.isLoggedIn = function(req, res) {
  return req.session ? !!req.session.user : false;
};

exports.checkUser = function(req, res, next) {
  if (!exports.isLoggedIn(req)) {
    res.redirect('/login');
  } else {
    next();
  }
};

exports.createSession = function(req, res, newUser) {
  return req.session.regenerate(function() {
      req.session.user = newUser;
      res.redirect('/');
    });
};

exports.createJobDoc = function(req, res, next) {
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
      console.log('createJobDoc - newJob:', newJob);
      next(newJob);
    }
  });
};
