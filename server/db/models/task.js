var bookshelf = require('../config');

var Task = bookshelf.Model.extend({
  tableName: 'tasks',
  hasTimestamps: true,
  jobs: function () {
    return this.belongsToMany(require('./job')).through(require('./job_task'));
  },
  user: function () {
    return this.belongsTo(require('./user'));
  }
});

module.exports = Task;
