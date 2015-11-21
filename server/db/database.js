var db = require('./config');
var User = require('./models/user');
var Client = require('./models/client');
var Employee = require('./models/employee');
var Expense = require('./models/expense');
var Job = require('./models/job');
var Task = require('./models/task');
var Job_Task = require('./models/job_task');

///////////////////////////
// CREATION QUERIES
///////////////////////////

// new Promise(function (resolve, reject) {
//   new User({
//     username: 'Rory',
//     email: 'sametz@ualberta.ca',
//     password: 'drowssap'
//   }).save().then(resolve);
// })
// .then(
//   new Promise(function (resolve, reject) {
//     new Client({
//       user_id: 1,
//       name: 'Haley',
//       address: '123 Fake Street',
//       city: 'San Francisco',
//       zip_code: 12345,
//       phone: 1234567890
//     }).save().then(resolve);
// }))
// .then(
//   new Promise(function (resolve, reject) {
//     new Employee({
//       user_id: 1,
//       first_name: 'Ambroise',
//       last_name: 'Piganeau',
//       address: '123 Paris Blvd',
//       city: 'Paris',
//       zip_code: 99,
//       hourly_billing_fee: 50000,
//       phone: 0987654321
//     }).save().then(resolve);
// }))
// .then(
//   new Promise(function (resolve, reject) {
//     new Expense({
//       user_id: 1,
//       expense_name: 'hairgel',
//       common: false,
//       unit_price: 500
//     }).save().then(resolve);
// }))
// .then(
//   new Promise(function (resolve, reject) {
//     new Job({
//       client_id: 1,
//       job_status: 'xxyyxx'
//     }).save().then(resolve);
// }))
// .then(
//   new Promise(function (resolve, reject) {
//     new Task({
//       user_id: 1,
//       task_name: 'Haircut',
//       default_price: 200,
//       common: true
//     }).save().then(resolve);
// }))
// .then(
//   new Promise(function (resolve, reject) {
//     new Job_Task({
//       job_id: 1,
//       task_id: 1,
//       status: 'pending'
//     }).save().then(resolve);
// }));


// new Promise(function (resolve, reject) {
//   Job_Task.where('id', 1).fetch().then(function (job_task) {
//     Employee.where('id', 1).fetch().then(function (employee) {
//       job_task.employees().attach(employee).then(function () {
//         job_task.employees().updatePivot({time_spent: 60});
//       })
//     });
//   });
// });

// new Promise(function (resolve, reject) {
//   Job_Task.where('id', 1).fetch().then(function (job_task) {
//     Expense.where('id', 1).fetch().then(function (expense) {
//       job_task.expenses().attach(expense).then(function () {
//         job_task.expenses().updatePivot({quantity: 1000});
//       })
//     });
//   });
// });

///////////////////////////
// RETRIEVAL QUERIES
///////////////////////////


// new Promise(function (resolve, reject) {
//   Client.where('name', 'Haley').fetch({withRelated: ['user']}).then(function (client) {
//     console.log('Test 1:','Rory' === client.related('user').get('username'));
//     // === 'Rory'
//     resolve();
//   });
// })
// .then(
//   new Promise(function (resolve, reject) {
//     Employee.where('city', 'Paris').fetch({withRelated: ['user']}).then(function (employee) {
//       console.log('Test 2:','drowssap' === employee.related('user').get('password'));
//       // === 'drowssap'
//       resolve();
//     });
// }))
// .then(
//   new Promise(function (resolve, reject) {
//     Expense.where('expense_name', 'hairgel').fetch({withRelated: ['user']}).then(function (employee) {
//       console.log('Test 3:','sametz@ualberta.ca' === employee.related('user').get('email'));
//       // === 'sametz@ualberta.ca'
//       resolve();
//     });
// }))
// .then(
//   new Promise(function (resolve, reject) {
//     Job.where('job_status','xxyyxx').fetch({withRelated: ['client']}).then(function (job) {
//       console.log('Test 4:','Haley' === job.related('client').get('name'));
//       // === 'Haley'
//       resolve();
//     });
// }))
// .then(
//   new Promise(function (resolve, reject) {
//     Task.where('common',true).fetch({withRelated: ['user']}).then(function (task) {
//       console.log('Test 5:','Rory' === task.related('user').get('username'));
//       // === 'Rory'
//       resolve();
//     });
// }))
// .then(
//   new Promise(function (resolve, reject) {
//     Job_Task.where('id', 1).fetch().then(function (job_task) {
//       console.log(job_task.get('status'));
//     });
//   }));




// .then(
//   new Promise(function (resolve, reject) {
//     var id = 1;
//     Job.where('id', id).fetch({withRelated: ['tasks']}).then(function (job) {
//       //job: specific job with id of 1
//       //job.related('tasks'): tasks related to job id of 1
//       //job.related('tasks').get(id).pivot: status of 
//       console.log('Test 6:','xxyyxx' === job.get('job_status'));
//       // === 'pending'
//       console.log('Test 7:',job.related('tasks').length === 1);
// /*      job.related('tasks').get(1).updatePivot({
//         job_id: 1,

//         status: 
//       })*/
//       console.log('Test 8:',job.related('tasks').get(1).pivot.get('job_id') === 1);
//       resolve();
//     });
// }));

