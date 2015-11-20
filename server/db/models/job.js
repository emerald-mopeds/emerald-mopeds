var bookshelf = require('../config');

var Job = bookshelf.Model.extend({
  tableName: 'jobs',
  client: function() {
    return this.belongsTo(Client);
  }
});

module.exports = Job;
