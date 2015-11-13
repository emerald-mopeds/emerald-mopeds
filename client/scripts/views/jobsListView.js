// Jobs List View --> connected to Jobs Collection
Lancealot.JobsListView = Backbone.View.extend({

  tagName: 'table',

  template: Templates['tableheads'],

  initialize: function(){
    this.collection.on('sync', this.addAll, this);
    this.collection.fetch();
  },

  render: function(){
    this.$el.empty();
    this.$el.html(this.template());
    return this;
  },

  addOne: function(item){
    var view = new Lancealot.JobView({ model: item });
    this.$el.append(view.render().el);
  },

  addAll: function(){
    this.collection.forEach(this.addOne, this);
  },

  handleSearch: function() {
    var client = $('#clientSearch').val();
    var filteredList = this.collection.search('client', client);

    this.filteredRender(filteredList);
  },

  filteredRender: function(list) {
    this.$el.empty();
    list.forEach(this.addOne, this);
  }

});