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
    if (!user) {
      res.redirect('/signup');
    }
    user.comparePassword(password, function(matches) {
      if (matches) {
        util.createSession(req, res, user);
      } else {
        res.redirect('/signup');
      }
    });
  });
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
  Client.where('user_id', req.session.user.id).fetch({withRelated: ['jobs']})
  .then(function (clients) {
    if (clients) {
      res.send(clients.related('jobs').serialize());
    } else {
      res.send('');
    }
  });
};

//fetchJob Response: {job, employees, expenses}, with client as job.client
exports.fetchJob = function (req, res) {
  var returnObj = {};
  var jobId = +req.params.id;

  Job.where('id', jobId).fetch({withRelated: ['client']})
  .then(function (job) {
    returnObj.job = job.serialize();
  })
  .then(function () {
    Job_Task.where('job_id', jobId).fetch({withRelated: ['employees', 'expenses']})
    .then(function (job_task) {
      returnObj.employees = job_task.related('employees').serialize();
      returnObj.expenses = job_task.related('expenses').serialize();
      res.send(returnObj);
    })
  });
};

/*
fetchClients is called when /clients path receives get request
Finds all clients in the database and responds with result of query
*/

exports.fetchClients = function (req, res) {
  Client.where('user_id', req.session.user.id).fetch()
  .then(function (clients) {
    res.send(clients);
  });
};

// /*
// Builds new Job document with request properties and saves it to the db
// */

exports.addJob = function (req, res) {
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
};

exports.fetchEmployees = function (req, res) {
  Employee.where('user_id', req.session.user.id).fetch()
  .then(function (employees) {
    res.send(employees);
  });
};

exports.addEmployee = function (req, res) {
  Employee.where({'user_id': req.session.user.id, first_name: req.body.first_name, last_name: req.body.last_name, phone: req.body.phone}).fetch()
  .then(function (employee) {
    console.log(employee);
    if (!employee) {
      new Employee({
        user_id: req.session.user.id,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        address: req.body.address,
        city: req.body.city,
        zip_code: req.body.zip_code,
        hourly_billing_fee: req.body.hourly_billing_fee,
        phone: req.body.phone
      }).save();
    } else {
      // TODO: add error handling of employee already existing
      res.redirect('/employees');
    }
  })
};
