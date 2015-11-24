// Jobs List View --> connected to Jobs Collection

/*
For templates, look at client/views/backbone_templates.

filteredRender takes a list and renders it. This
allows us to dynamically filter and render jobs as the 
user is typing in the clientSearch filter.
*/

Lancealot.JobsListView = Backbone.View.extend({

  tagName: 'table',
  className: 'table table-striped',

  template: Templates['jobstable'],

  initialize: function(){
    this.collection.on('sync', this.render, this);
    this.collection.fetch();
  },

  events: {
    'change #statuses':  'filterStatus'
  },

  render: function() {
    this.$el.empty();
    this.$el.html(this.template());
    this.addAll();
    return this;
  },

  addOne: function(item){
    var view = new Lancealot.JobRowView({ model: item });
    this.$el.append(view.render().el);
  },

  addAll: function(){
    this.collection.forEach(this.addOne, this);
  },

  filteredRender: function(list) {
    this.$el.empty();
    this.$el.html(this.template());
    list.forEach(this.addOne, this);
  },

  filterStatus: function(e) {
    if (e.target.value === 'all') this.render();
    else {
      var list = this.collection.filter(function(model) {
        return model.get('status') === e.target.value
      });
      this.filteredRender(list);
    }
  }

});
