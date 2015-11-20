var bookshelf = require('../config');
var Client = require('./client');
var Task = require('./task');

var Job = bookshelf.Model.extend({
  tableName: 'jobs',
  client: function() {
    return this.belongsTo(Client);
  },
  tasks: function () {
    return this.belongsToMany(Task).withPivot(['status']);
  }
});

module.exports = Job;
