// Client Entry View (form) --> connected to Clients Collection
var ClientEntryView = Backbone.View.extend({

  tagName: 'form',

  template: _.template('<label>Name:</label><input id="name" type="text"/><br/>'+
                      '<label>Address:</label><input id="address" type="text"/><br/>' +
                      '<label>Phone:</label><input id="phone" type="text"/><br/>' +
                      '<button class="submit">Add Client</button>'),

  events: {
    'submit': 'handleSubmit' 
  },

  initialize: function() {
    this.render();
  },

  render: function(){
    return this.$el.html(this.template());
  },

  handleSubmit: function(e) {
    e.preventDefault();

    var name = $('#name').val();
    var address = $('#address').val();
    var phone = $('#phone').val();

    this.collection.create({
      name: name,
      address: address,
      phone: phone,
    });

    $('input').val('');
  }

});