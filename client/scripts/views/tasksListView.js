// Clients List View --> connected to Clients Collection

/*
For templates, look at client/views/backbone_templates.
*/

Lancealot.TasksListView = Backbone.View.extend({

  tagName: "table",
  className: 'table table-striped',

  template: Templates['tasktable'],

  initialize: function(options){
    this.url = options.jobId;
    this.collection.on('sync', this.addAll, this);
    this.collection.fetch({
      url: '/api/job/' + this.url
    });
  },

  addOne: function(item){
    var view = new Lancealot.TaskRowView({ model: item });
    view.on('reinit', function () {
      this.collection.fetch({
        url: '/api/job/' + this.url
      })
    }, this);
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
