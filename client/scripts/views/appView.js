// App View

/*
For templates, look at client/views/backbone_templates.

AppView renders JobsListView, as well as the "Filter by Client" search
(clientSearchView)

AppView listens for typing in the client filter (#clientSearch) and delegates
rendering of results to JobsListView via the handleSearch function
*/

Lancealot.AppView = Backbone.View.extend({

  template: Templates['jobsHeader'],

  events: {
    'keyup #clientSearch': 'handleSearch'
  },

  initialize: function(){
    this.JobsListView = new Lancealot.JobsListView({collection: this.collection});
  },

  render: function(){
    this.$el.html([this.template(), this.JobsListView.render().el]);
    return this;
  },

  handleSearch: function() {
    var client = $('#clientSearch').val();
    var filteredList = this.collection.searchByClient(client);
    this.JobsListView.filteredRender(filteredList);
  }

});
