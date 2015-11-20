// App Model

/*
Sets up client side business logic
*/

var App = Backbone.Model.extend({

  initialize: function() {
    this.set('jobs', new Jobs());
    this.set('clients', new Clients());
    this.set('employees', new Employees());
  },


});