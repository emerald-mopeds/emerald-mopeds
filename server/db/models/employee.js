var bookshelf = require('../config');
var User = require('./user');
// var Job_Task = require('./job_task');

var Employee = bookshelf.Model.extend({
  tableName: 'employees',
  user: function() {
    return this.belongsTo(User);
  },
  jobs_tasks: function() {
    return this.belongsToMany(Job_Task, 'employees_jobs_tasks', 'employee_id', 'job_task_id');
  }
});

module.exports = Employee;
