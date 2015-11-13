// App View
Lancealot.AppView = Backbone.View.extend({

  template: Templates['home'],

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
    var filteredList = this.collection.search('client', client);
    this.JobsListView.filteredRender(filteredList);
  }

});