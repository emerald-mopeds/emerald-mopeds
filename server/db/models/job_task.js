var bookshelf = require('../config');

var Job_Task = bookshelf.Model.extend({
  tableName: 'jobs_tasks',
  hasTimestamps: true,
  employees: function() {
    return this.belongsToMany(require('./employee'), 'employees_jobs_tasks', 'job_task_id', 'employee_id').withPivot('time_spent');
  },
  expenses: function() {
    return this.belongsToMany(require('./expense'), 'expenses_jobs_tasks', 'job_task_id', 'expense_id').withPivot('quantity');
  }
});

module.exports = Job_Task;
