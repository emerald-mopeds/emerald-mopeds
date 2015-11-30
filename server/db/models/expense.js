var bookshelf = require('../config');

var Expense = bookshelf.Model.extend({
  tableName: 'expenses',
  hasTimestamps: true,
  user: function() {
    return this.belongsTo(require('./user'));
  },
  jobs_tasks: function() {
    return this.belongsToMany(require('./job_task'), 'expenses_jobs_tasks', 'expense_id', 'job_task_id');
  }
});

module.exports = Expense;
