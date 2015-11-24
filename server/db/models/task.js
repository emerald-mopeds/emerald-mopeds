var bookshelf = require('../config');

var Task = bookshelf.Model.extend({
  tableName: 'tasks',
  hasTimestamps: true,
  // job_task: function () {
  //   return this.hasMany(require('./job_task'), '')
  // },
  jobs: function () {
    return this.belongsToMany(require('./job')).through(require('./job_task'));
  },
  user: function () {
    return this.belongsTo(require('./user'));
  }
});

module.exports = Task;
