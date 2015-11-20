var bookshelf = require('../config');

var Expense = bookshelf.Model.extend({
  tableName: 'expenses',
  user: function() {
    return this.belongsTo(User);
  }
});

module.exports = Expense;
