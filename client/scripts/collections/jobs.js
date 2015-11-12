// Job Collection
var Jobs = Backbone.Collection.extend({

  model: Job,
  url: '/jobs'

});