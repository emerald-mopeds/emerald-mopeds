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
    console.log(this.el);
    return this;
  },

  addOne: function(item){
    var view = new Lancealot.JobView({ model: item });
    this.$el.append(view.render().el);
  },

  addAll: function(){
    this.collection.forEach(this.addOne, this);
  }

  // filteredRender: function(list) {
  //   this.$el.children().detach();

  //   this.$el.html(this.template).append(
  //     list.map(function(job) {
  //       return new JobView({model: job}).render();
  //     })
  //   );
  // }

});