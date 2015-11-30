var bookshelf = require('../config');

var Job = bookshelf.Model.extend({
  tableName: 'jobs',
  hasTimestamps: true,
  client: function() {
    return this.belongsTo(require('./client'));
  }/*,
  tasks: function () {
    return this.belongsToMany(Task).through(Job_Task);
  }*/
});

module.exports = Job;
