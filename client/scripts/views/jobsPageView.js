// JobsPageView

/*
For templates, look at client/views/backbone_templates.

JobsPageView renders JobsListView, as well as the "Filter by Client" search
(clientSearchView)

JobsPageView listens for typing in the client filter (#clientSearch) and delegates
rendering of results to JobsListView via the handleSearch function
*/

Lancealot.JobsPageView = Backbone.View.extend({

  template: Templates['subHeader'],

  events: {
    'click button#createNewJob': 'renderJobCreateView',
    'keyup input': 'handleSearch'
  },

  initialize: function(){
    this.JobsListView = new Lancealot.JobsListView({collection: this.collection});
    this.templateContent = {buttonId: 'createNewJob',
      buttonText: 'Create New Job',
      inputDomID: 'clientSearch',
      filterbyText: 'filter by client...'};
  },

  render: function(){
    this.$el.html([this.template(this.templateContent), this.JobsListView.render().el]);
    return this;
  },

  handleSearch: function() {
    var client = $('#' + this.templateContent.inputDomID).val();
    var filteredList = this.collection.searchByClient(client);
    this.JobsListView.filteredRender(filteredList);
  },

  renderJobCreateView: function(e) {
    e && e.preventDefault();
    Backbone.history.navigate('/addjob', true);
  }

});
