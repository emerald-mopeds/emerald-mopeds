var bookshelf = require('../config');
var User = require('./user');

var Employee = bookshelf.Model.extend({
  tableName: 'employees',
  user: function() {
    return this.belongsTo(User);
  }
});

module.exports = Employee;
