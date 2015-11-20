// Client Collection

Lancealot.Clients = Backbone.Collection.extend({

  model: Lancealot.Client,
  url: '/api/clients'

});
