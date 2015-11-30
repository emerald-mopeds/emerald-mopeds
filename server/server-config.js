var express = require('express');
var bodyParser = require('body-parser');
var partials = require('express-partials');
var handle = require('./lib/request-handler.js');
var session = require('express-session');
var util = require('./lib/utility');

var app = express();

app.all("/*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  return next();
});

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', __dirname + '/../client/views');
app.set('view engine', 'ejs');
app.use(partials());
app.use(express.static(__dirname + '/../client'));
app.use(session({
  secret: 'nyan cat',
  resave: false,
  saveUninitialized: true
}));
// app.use(function (error, req, res, next) {
//   console.error(error.stack);
//   next(error);
// });

// app.use(function (error, req, res, next) {
//   res.send(500, {error: error.message});
// });


//Request handlers for all routes in app

app.get('/login', util.loginUserForm);
app.post('/login', handle.loginUser);

app.get('/signup', util.signupUserForm);
app.post('/signup', handle.signupUser);

app.get('/logout', function (req, res) {
  req.session.destroy(function () {
    res.redirect('/login');
  });
});

app.get('/api/clients', handle.fetchClients);
app.post('/api/clients', handle.addClient);
app.delete('/api/clients/:id', handle.deleteClient);
app.put('/api/clients/:id', handle.updateClient);

app.get('/api/tasks', handle.fetchTasks);
app.post('/api/tasks', handle.addTaskToJob);
app.put('/api/task/:id', handle.updateTaskName);

app.get('/api/commontasks', handle.getCommonTasks);

app.get('/api/employees', handle.fetchEmployees);
app.post('/api/employees', handle.addEmployee);
app.delete('/api/employees/:id', handle.deleteEmployee);
app.put('/api/employees/:id', handle.updateEmployee);

app.post('/api/employee/:id', handle.addEmployeeToTask);

app.get('/api/job/:id', handle.fetchJob);
app.get('/api/jobs', handle.fetchJobs);
app.post('/api/jobs', handle.addJob);
app.delete('/api/jobs/:id', handle.deleteJob);
app.put('/api/jobs/:id', handle.updateJob);

app.post('/api/expense/', handle.addExpenseToTask);
app.put('/api/expenses/:id', handle.updateExpense);

app.put('/api/preferences', handle.updatePreferences);

app.get('/api/job/:id?', function (req, res) {
  handle.fetchJob(req, res);
});

app.get('/*', util.checkUser, util.renderIndex);

module.exports = app;
