// Clients List View --> connected to Clients Collection
Lancealot.ClientsListView = Backbone.View.extend({

  tagName: "table",

  template: _.template('<th>Name</th>' + '<th>Address</th>' + '<th>Phone</th>'),

  initialize: function(){
    this.collection.on('sync', this.render, this);
    this.render();
  },

  render: function(){
    this.$el.children().detach();

    this.$el.html(this.template).append(
      this.collection.map(function(client) {
        return new ClientView({model: client}).render();
      })
    );
  }

});