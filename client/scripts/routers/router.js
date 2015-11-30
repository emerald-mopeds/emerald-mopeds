// Router

/*
Look at app.js to see where this router comes into play.
Based on the specified route (eg '/', '/add'), the router
will render the appropriate view (eg 'JobsPageView', 'JobEntryView')
*/

Lancealot.Router = Backbone.Router.extend({

  initialize: function(options) {
    this.$el = options.el;
  },

  routes: {
    'jobs': 'showJobs',
    'addjob': 'addJob',
    'addclient': 'addClient',
    'clients': 'showClients',
    'addemployee': 'addEmployee',
    'employees': 'showEmployees',
    'preferences': 'showPreferences',
    'job/:id': 'showTasks',
    '': 'showJobs'
  },

  swapView: function(view){
    console.log(Backbone.history.getFragment());
    this.$el.html(view.render().el);
  },

  showJobs: function(){
    var jobs = new Lancealot.Jobs();
    var jobsPageView = new Lancealot.JobsPageView({ collection: jobs });
    this.swapView(jobsPageView);
  },

  addJob: function(){
    var clients = new Lancealot.Clients();
    this.swapView(new Lancealot.JobCreateView({collection: clients}));
  },

  addClient: function(){
    this.swapView(new Lancealot.ClientCreateView());
  },

  showClients: function(){
    var clients = new Lancealot.Clients();
    var clientsView = new Lancealot.ClientsPageView({ collection: clients });
    this.swapView(clientsView);
  },

  addEmployee: function() {
    this.swapView(new Lancealot.EmployeeCreateView());
  },
  
  showEmployees: function() {
    var employees = new Lancealot.Employees();
    var employeesView = new Lancealot.EmployeesPageView( { collection: employees });
    this.swapView(employeesView);
  },

  showPreferences: function() {
    var preferencesView = new Lancealot.PreferencesPageView();
    this.swapView(preferencesView);
  },

  showTasks: function(jobId) {
    var tasksView = new Lancealot.TasksPageView({jobId: jobId});
    this.swapView(tasksView);
  }


});
