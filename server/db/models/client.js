var bookshelf = require('../config');
var User = require('./user');
var Job = require('./job');

var Client = bookshelf.Model.extend({
  tableName: 'clients',
  user: function() {
    return this.belongsTo(User);
  },
  jobs: function() {
    return this.hasMany(Job);
  }
});

module.exports = Client;
