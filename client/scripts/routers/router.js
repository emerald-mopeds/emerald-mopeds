// Router
Lancealot.Router = Backbone.Router.extend({

  initialize: function(options) {
    this.$el = options.el;
  },

  routes: {
    '': 'index',
    'add': 'addJob',
    'addclient': 'addClient',
    'clients': 'showClients'
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
  },

  addClient: function(){
    this.swapView(new Lancealot.ClientEntryView());
  },

  showClients: function(){
    var clients = new Lancealot.Clients();
    var clientsView = new Lancealot.ClientsListView({ collection: clients });
    this.swapView(clientsView);
  }
});
