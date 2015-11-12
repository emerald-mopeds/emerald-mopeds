// Jobs List View --> connected to Jobs Collection
var JobsListView = Backbone.View.extend({

  tagName: "table",

  template: _.template('<th>Client</th>' + '<th>Description</th>' + '<th>Rate</th>' + 
                      '<th>Start</th>' + '<th>End</th>' + '<th>Status</th>'),

  initialize: function(){
    this.collection.on('sync', this.render, this);
    this.render();
  },

  render: function(){
    this.$el.children().detach();

    this.$el.html(this.template).append(
      this.collection.map(function(job) {
        return new JobView({model: job}).render();
      })
    );
  },

  filteredRender: function(list) {
    this.$el.children().detach();

    this.$el.html(this.template).append(
      list.map(function(job) {
        return new JobView({model: job}).render();
      })
    );
  }

});