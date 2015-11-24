// ClientsPageView

/*
For templates, look at client/views/backbone_templates.

ClientsPageView renders JobsListView, as well as the "Filter by Client" search
(clientSearchView)

ClientsPageView listens for typing in the client filter (#clientSearch) and delegates
rendering of results to JobsListView via the handleSearch function
*/

Lancealot.TasksPageView = Backbone.View.extend({

  template: Templates['subHeader'],

  events: {
    // 'keyup input': 'handleSearch',
    'click button#createNewTask': 'renderTaskCreateView'
  },

  initialize: function (options) {
    console.log(options);
    var tasks = new Lancealot.Tasks(/*{url: '/api/job/' + jobId}*/);
    this.TasksListView = new Lancealot.TasksListView({collection: tasks, jobId: options.jobId});
    this.templateContent = {buttonId: 'createNewTask',
      buttonText: 'Create New Task',
      inputDomID: 'taskSearch',
      filterbyText: 'filter by task...'};
  },

  render: function(){
    this.$el.html([this.template(this.templateContent), this.TasksListView.render().el]);
    return this;
  },

  handleSearch: function() {
    // var client = $('#' + this.templateContent.inputDomID).val();
    // var filteredList = this.collection.searchByClient(client);
    // this.TaskListView.filteredRender(filteredList);
  },

  renderClientCreateView: function(e) {
    e && e.preventDefault();
    Backbone.history.navigate('/addtask', true);
  }

});
