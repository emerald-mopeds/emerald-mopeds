// Router
var Router = Backbone.Router.extend({

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
    var jobs = new Jobs();
    var jobsListView = new jobsListView({ collection: jobs });
    this.swapView(jobsListView);
  },

  addJob: function(){
    this.swapView(new jobEntryView());
  }
});
