var bookshelf = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var User = bookshelf.Model.extend({
  tableName: 'users',
  initialize: function(){
    this.on('creating', this.hashPassword);
  },
  comparePassword: function(attemptedPassword, callback) {
    bcrypt.compare(attemptedPassword, this.get('password'), function(err, isMatch) {
      callback(isMatch);
    });
  },
  hashPassword: function(){
    var cipher = Promise.promisify(bcrypt.hash);
    return cipher(this.get('password'), null, null).bind(this)
      .then(function(hash) {
        this.set('password', hash);
      });
  },
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
