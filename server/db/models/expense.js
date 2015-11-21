var bookshelf = require('../config');
var User = require('./user');

var Expense = bookshelf.Model.extend({
  tableName: 'expenses',
  hasTimestamps: true,
  user: function() {
    return this.belongsTo(User);
  },
  jobs_tasks: function() {
    return this.belongsToMany(Job_Task, 'expenses_jobs_tasks', 'expense_id', 'job_task_id');
  }
});

module.exports = Expense;
