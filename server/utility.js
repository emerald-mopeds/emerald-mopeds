var Job = require('./db/models/job');
var Client = require('./db/models/client');

exports.isLoggedIn = function(req, res) {
  return req.session ? !!req.session.user : false;
};

exports.checkUser = function(req, res, next) {
  if (!exports.isLoggedIn(req)) {
    res.render('splash');
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

exports.createOrUpdateJob = function(req, res, job) {

  if (job === null) {
    //create
    exports.createJobDoc(req, res);
  } else {
    //update
    exports.updateJobDoc(req, res);
  }

};

exports.createJobDoc = function(req, res) {
  Client.find({name:req.body.client}).exec(function (err, client){

    if(err) return res.send(500, err);

    var newJob = new Job({
      client: client[0]._id,
      rate: req.body.rate,
      start: req.body.start,
      end: req.body.end,
      status: req.body.status,
      description: req.body.description
    });

    newJob.save(function (err, job) {
      if (err) return res.send(500, err);
      res.redirect('/jobs');
    });

  });
};

exports.updateJobDoc = function (req, res) {
  Job.findOneAndUpdate({_id: req.body._id}, {status: req.body.status}, function (err, job) {
    if (err) return res.send(500, err);
    res.redirect('/');
  });
}
