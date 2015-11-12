// App Model
var App = Backbone.Model.extend({

  initialize: function() {
    this.set('jobs', new Jobs());
    this.set('clients', new Clients());
  },


});