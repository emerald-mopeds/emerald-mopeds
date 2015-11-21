var bookshelf = require('../config');
var User = require('./user');

var Client = bookshelf.Model.extend({
  tableName: 'clients',
  user: function() {
    return this.belongsTo(User);
  }
});

module.exports = Client;
