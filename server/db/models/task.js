var bookshelf = require('../config');
var Job = require('./job');
var User = require('./user');

var Task = bookshelf.Model.extend({
  tableName: 'tasks',
  jobs: function () {
    return this.belongsToMany(Job).through(Job_Task);
  },
  user: function () {
    return this.belongsTo(User);
  }
});

module.exports = Task;
