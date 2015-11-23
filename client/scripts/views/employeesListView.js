Lancealot.EmployeesListView = Backbone.View.extend({

  tagName: "table",
  className: 'table table-striped',

  template: Templates['employeetable'],

  initialize: function(){
    this.collection.on('sync', this.addAll, this);
    this.listenTo(this.collection, 'destroy', this.render);
    this.collection.fetch();
  },

  addOne: function(item){
    var view = new Lancealot.EmployeeRowView({ model: item });
    this.$el.append(view.render().el);
  },

  addAll: function(){
    this.collection.forEach(this.addOne, this);
  },

  render: function(){
    this.$el.empty();
    this.$el.html(this.template());
    return this;
  },

  filteredRender: function(list) {
    this.$el.empty();
    this.$el.html(this.template());
    list.forEach(this.addOne, this);
  }

});
