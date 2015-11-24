// Client Collection

Lancealot.Clients = Backbone.Collection.extend({

  model: Lancealot.Client,
  url: '/api/clients',

  searchByClient: function(value){

    if (value == "") return this;
 
    var pattern = new RegExp(value,"gi");

    var filtered = (this.filter(function (client) {
      console.log(client);
      return pattern.test(client.get('name'));
    }));

    return new Lancealot.Clients(filtered);

  }
});
