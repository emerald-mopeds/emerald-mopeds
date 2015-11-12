var request = require('request');

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