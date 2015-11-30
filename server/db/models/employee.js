var bookshelf = require('../config');

var Employee = bookshelf.Model.extend({
  tableName: 'employees',
  hasTimestamps: true,
  user: function() {
    return this.belongsTo(require('./user'));
  },
  jobs_tasks: function() {
    return this.belongsToMany(require('./job_task'), 'employees_jobs_tasks', 'employee_id', 'job_task_id');
  }
});

module.exports = Employee;
