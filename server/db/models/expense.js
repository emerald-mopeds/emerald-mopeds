var bookshelf = require('../config');
var User = require('./user');

var Expense = bookshelf.Model.extend({
  tableName: 'expenses',
  user: function() {
    return this.belongsTo(User);
  }
});

module.exports = Expense;
