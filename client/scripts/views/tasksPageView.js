// ClientsPageView

/*
For templates, look at client/views/backbone_templates.

ClientsPageView renders JobsListView, as well as the "Filter by Client" search
(clientSearchView)

ClientsPageView listens for typing in the client filter (#clientSearch) and delegates
rendering of results to JobsListView via the handleSearch function
*/

Lancealot.TasksPageView = Backbone.View.extend({

  template: Templates['taskSubHeader'],

  events: {
    'keyup input': 'handleSearch',
    'click button.addTask': 'addTaskToJob',
    'click button.showForm': 'showForm'
  },

  initialize: function (options) {
    this.collection = new Lancealot.Tasks();
    this.jobId = options.jobId;
    this.TasksListView = new Lancealot.TasksListView({collection: this.collection, jobId: this.jobId});
    this.templateContent = {buttonId: 'createNewTask',
      buttonText: 'Create New Task',
      inputDomID: 'taskSearch',
      filterbyText: 'filter by task...'};
    this.formVisibility = false;
  },

  render: function(){
    this.$el.html([this.template(this.templateContent), this.TasksListView.render().el]);
    return this;
  },

  handleSearch: function() {
    var query = $('#' + this.templateContent.inputDomID).val();
    var filteredList = this.collection.searchByTask(query);
    this.TasksListView.filteredRender(filteredList);
  },

  addTaskToJob: function (e) {
    e && e.preventDefault();
    var that = this;
    $.ajax({
      url: '/api/tasks/',
      method: 'POST',
      data: {
        job_id: this.jobId
      },
      success: function () {
        that.render();
      }
    })
  },

  showForm: function(e) {
    e && e.preventDefault();
    this.$('form').toggle();
    if (!this.formVisibility){
      this.$('.showForm').html('Cancel Add New Task');
    }else{
      this.$('.showForm').html('Create New Task');
    }
    this.formVisibility = !this.formVisibility;
  },

});
