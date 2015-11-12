// App View
var AppView = Backbone.View.extend({

  initialize: function(){
    this.JobsListView = new JobsListView({collection: this.model.get('jobs')});
    this.JobEntryView = new JobEntryView({collection: this.model.get('jobs')});

    // this.router = new Router({ el: this.$el.find('#container') });
    // Backbone.history.start({ pushState: true });
  },

  render: function(){
    return this.$el.html([
      this.JobEntryView.$el, this.JobsListView.$el
      ]);
  }

});