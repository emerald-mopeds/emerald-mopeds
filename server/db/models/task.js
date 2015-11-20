var bookshelf = require('../config');

var Task = bookshelf.Model.extend({
  tableName: 'tasks'
});

module.exports = Task;
