// Clients List View --> connected to Clients Collection

/*
For templates, look at client/views/backbone_templates.
*/

Lancealot.ClientsListView = Backbone.View.extend({

  tagName: "table",
  className: 'table table-striped',

  template: Templates['clienttable'],

  initialize: function(){
    this.collection.on('sync', this.render, this);
    this.listenTo(this.collection, 'destroy', this.render);
    this.collection.fetch();
  },

  addOne: function(item){
    var view = new Lancealot.ClientRowView({ model: item });
    this.$el.append(view.render().el);
  },

  addAll: function(){
    this.collection.forEach(this.addOne, this);
  },

  render: function(){
    this.$el.empty();
    this.$el.html(this.template());
    this.addAll();
    return this;
  },

  filteredRender: function(list) {
    this.$el.empty();
    this.$el.html(this.template());
    list.forEach(this.addOne, this);
  }

});
