var util = require('./utility');
var db = require('../db/config');
var User = require('../db/models/user');
var Client = require('../db/models/client');
var Employee = require('../db/models/employee');
var Expense = require('../db/models/expense');
var Job = require('../db/models/job');
var Task = require('../db/models/task');
var Job_Task = require('../db/models/job_task');

/*
signupUser is called when /signup receives post request
Determines if user exists in db; if not, adds user to db
Post request is then sent to toggle api to register user account
Api token is taken from toggl resp to build new User document, then saves it
If save is successful, new user session is created
If user exists, redirect to /login
*/
exports.signupUser = function (req, res) {
  var email = req.body.email;
  var password = req.body.password;

  User.where('username', email).fetch()
  .then(function (user) {
    if (!user) {
      new User({username: email, email: email, password: password}).save()
      .then(function (newUser) {
        util.createSession(req, res, newUser);
      });
    } else {
      console.log('Account already exists');
      res.redirect('/login');
    }
  });
};


// /*
// loginUser is called when /login receives post request
// Determines if user exists in db; if not, redirects to /signup
// If user exists, sends get request with custom options to toggl api
// Receives all toggl info for later use, and creates user session
// */
exports.loginUser = function (req, res) {
  var email = req.body.email;
  var password = req.body.password;

  User.where('username', email).fetch()
  .then(function (user) {
    if (user) {
      //TODO: some encryption
      if (user.get('password') === password) {
        util.createSession(req, res, user);
      } else {
        //TODO: display to user that user or password does not exist
        res.redirect('/signup');
      }
    } else {
      //TODO: display to user that user or password does not exist
      res.redirect('/signup');
    }
  });
};


/*
fetchClients is called when /clients path receives get request
Finds all clients in the database and responds with result of query
*/
exports.fetchClients = function (req, res) {
//   database.fetchClients()
//   .then(function (clients) {
//     res.send(clients)
//   }, function (err) {
//     throw new Error(err);
//   });
};

// /*
// Builds new Client document with request properties and saves it to the db
// */
exports.addClient = function (req, res) {
  new Client({
    user_id: req.session.user.id,
    name: req.body.name,
    address: req.body.address,
    city: req.body.city,
    zip_code: req.body.zipCode,
    phone: req.body.phone
  }).save()
  .then(function (newClient) {
    console.log('toto');
    res.send(newClient);
  }, function (err) {
    console.log(err);
    res.status(500).send(err);
  })
};

// /*
// fetchJobs is called when /jobs path receives get request
// Finds all jobs in the database, replaces client_id with an object that include client Id and name
// Responds with result of query
// */
exports.fetchJobs = function (req, res) {
//   Job.find({})
//      .populate('client', 'name')
//      .exec(function (err, jobs) {
//        if(err) {
//         res.status(500).send(err);
//        } else {
//         res.send(jobs);
//        }
//      });
};

// /*
// Builds new Job document with request properties and saves it to the db
// */
exports.addJob = function (req, res) {
//   //call createJobDoc first to find client id to use to create job document
//   console.log('req body in addJob: ', req.body);
//   //check if id already exists
//   Job.findById(req.body._id, function (err, job) {
//     if (err) {
//       console.error("error");
//     } else {
//       util.createOrUpdateJob(req, res, job);
//     }
//   });
};





exports.createJobDoc = function(req, res) {
//   Client.find({name:req.body.client}).exec(function (err, client){

//     if(err) return res.status(500).send(err);

//     var newJob = new Job({
//       client: client[0]._id,
//       rate: req.body.rate,
//       start: req.body.start,
//       end: req.body.end,
//       status: req.body.status,
//       description: req.body.description
//     });

//     newJob.save(function (err, job) {
//       if (err) return res.status(500).send(err);
//       res.send(job);
//     });

  // });
};

// /*
// Finds the Job record that matches the id in the request body and updates the status of the job. 
// */
exports.updateJobDoc = function (req, res) {
//   Job.findOneAndUpdate({_id: req.body._id}, {status: req.body.status}, function (err, job) {
//     if (err) return res.status(500).send(err);
//     res.redirect('/');
//   });
}
