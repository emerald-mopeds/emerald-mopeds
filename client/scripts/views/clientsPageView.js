// ClientsPageView

/*
For templates, look at client/views/backbone_templates.

ClientsPageView renders JobsListView, as well as the "Filter by Client" search
(clientSearchView)

ClientsPageView listens for typing in the client filter (#clientSearch) and delegates
rendering of results to JobsListView via the handleSearch function
*/

Lancealot.ClientsPageView = Backbone.View.extend({

  template: Templates['subHeader'],

  events: {
    'keyup input': 'handleSearch'
  },

  initialize: function(){
    this.ClientsListView = new Lancealot.ClientsListView({collection: this.collection});
    this.templateContent = {buttonId: 'createNewClient',
      buttonText: 'Create New Client',
      inputDomID: 'clientSearch',
      filterbyText: 'filter by client...'};
  },

  render: function(){
    this.$el.html([this.template(this.templateContent), this.ClientsListView.render().el]);
    return this;
  },

  handleSearch: function() {
    var client = $('#' + this.templateContent.inputDomID).val();
    var filteredList = this.collection.searchByClient(client);
    this.ClientsListView.filteredRender(filteredList);
  }

});
