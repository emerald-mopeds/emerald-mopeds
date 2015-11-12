// App Model
var App = Backbone.Model.extend({

  initialize: function() {
    this.set('jobs', new Jobs());
  },

});