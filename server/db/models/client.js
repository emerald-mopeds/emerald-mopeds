var bookshelf = require('../config');

var Client = bookshelf.Model.extend({
  tableName: 'clients',
  hasTimestamps: true,
  user: function() {
    return this.belongsTo(require('./user'));
  },
  jobs: function() {
    return this.hasMany(require('./job'));
  }
});

module.exports = Client;
