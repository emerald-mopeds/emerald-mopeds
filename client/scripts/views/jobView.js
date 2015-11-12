// Job View --> connected to Job Model
var JobView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td><%= client %></td>' +
                     '<td><%= description %></td>' +
                     '<td>$<%= rate %></td>' +
                     '<td><%= start %></td>' + 
                     '<td><%= end %></td>' + 
                     '<td><%= status %></td>'
                      ),

  initialize: function() {
    this.model.on('change', this.render, this);
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});