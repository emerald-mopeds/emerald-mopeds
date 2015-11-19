var handler = require('./request-handler')

exports.renderIndex = function(req, res) {
  res.render('index');
};

exports.signupUserForm = function(req, res) {
  res.render('signup');
};

// exports.splash = function(req, res, next) {
//   res.render('splash');
//   next();
// };

exports.loginUserForm = function(req, res) {
  res.render('login');
};

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


/*
Post requests from the front-end can either be a requests to create a new job or to update a new job.
This function searches to see if the job that comes in from the request and either creates a new Job
record if it didn't already exist in the DB or updates the 'status' property of the job if the record already exists. 
*/
exports.createOrUpdateJob = function(req, res, job) {
  if (job === null) {
    //create
    handler.createJobDoc(req, res);
  } else {
    //update
    handler.updateJobDoc(req, res);
  }
};
