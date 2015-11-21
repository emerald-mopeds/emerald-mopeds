var bookshelf = require('../config');
/*var Employee = require('./employee');
var Task = require('./task');
var Expense = require('./expense');
var Client = require('./client');*/

var User = bookshelf.Model.extend({
  tableName: 'users',
  employees: function () {
    return this.hasMany(Employee);
  },
  tasks: function () {
    return this.hasMany(Task);
  },
  expenses: function () {
    return this.hasMany(Expense);
  },
  clients: function () {
    return this.hasMany(Client);
  }
});

module.exports = User;
