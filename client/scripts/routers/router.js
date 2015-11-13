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
    var appView = new Lancealot.AppView({ collection: jobs });
    this.swapView(appView);
  },

  addJob: function(){
    this.swapView(new Lancealot.JobEntryView());
  }
});
