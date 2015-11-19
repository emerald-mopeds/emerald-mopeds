var bookshelf = require('../config');

var User = bookshelf.Model.extend({
  tableName: 'users'
});

module.exports = User;
