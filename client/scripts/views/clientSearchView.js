// ClientSearch View --> connected to Jobs collection
var ClientSearchView = Backbone.View.extend({

  tagName: 'form',

  template: _.template('<label>Search by Client:</label><input id="clientSearch" type="text"/><br/>'),

  initialize: function() {
    this.render();
  },

  render: function(){
    return this.$el.html(this.template());
  },

});