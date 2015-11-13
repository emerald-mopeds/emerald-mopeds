// Job View --> connected to Job Model
var JobView = Backbone.View.extend({

  tagName: 'tr',

  events: {
    'click input:checkbox': 'toggleComplete'
  },


  template: _.template('<td><%= client.name || client %></td>' +
                     '<td><%= description %></td>' +
                     '<td>$<%= rate %></td>' +
                     '<td><%= start %></td>' + 
                     '<td><%= end %></td>' + 
                     '<td><input type="checkbox" <%= checked %> ></td>'
                      ),

  initialize: function() {
    this.model.on('change', this.render, this);
  },

  render: function(){
    var data = this.model.toJSON();
    data.checked = data.status ? 'checked' : '';
    return this.$el.html(this.template(data));
    // return this.$el.html(this.template(this.model.attributes));
  },

  toggleComplete: function(e) {
    var checked = e.target.checked;
    this.model.save({status: checked});
  }


});