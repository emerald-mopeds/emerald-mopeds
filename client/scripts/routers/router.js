// Router
Lancealot.Router = Backbone.Router.extend({

  initialize: function(options) {
    this.$el = options.el;
  },

  routes: {
    '': 'index',
    'add': 'addJob',
  },

  swapView: function(view){
    this.$el.html(view.render().el);
  },

  index: function(){
    var jobs = new Lancealot.Jobs();
    var jobsListView = new Lancealot.JobsListView({ collection: jobs });
    this.swapView(jobsListView);
  },

  addJob: function(){
    this.swapView(new Lancealot.JobEntryView());
  }
});
