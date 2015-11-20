var bookshelf = require('../config');

var Employee = bookshelf.Model.extend({
  tableName: 'employees',
  user: function() {
    return this.belongsTo(User);
  }
});

module.exports = Employee;
