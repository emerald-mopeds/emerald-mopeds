// Client View --> Connected to Client model
Lancealot.ClientView = Backbone.View.extend({
  
  tagname: 'tr',

  template: _.template('<td><%= name %></td>' +
                     '<td><%= address %></td>' +
                     '<td><%= phone %></td>' 
                      ),

  initialize: function() {
    this.model.on('change', this.render, this);
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }
  
});