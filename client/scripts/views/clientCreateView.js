// Client Create View (form) --> connected to Clients Collection

/*
For templates, look at client/views/backbone_templates.

handleSubmit takes user's inputs and creates a new client,
which issues a post request to /clients
*/

Lancealot.ClientCreateView = Backbone.View.extend({

  template: Templates['addClient'],

  events: {
    'submit': 'handleSubmit'
  },

  initialize: function() {
    this.render();
  },

  render: function(){
    this.$el.html(this.template());
    return this;
  },

  handleSubmit: function(e) {
    e.preventDefault();

    var name = $('#name').val();
    var address = $('#address').val();
    var city = $('#city').val();
    var zipCode = $('#zipCode').val();
    var phone = $('#phone').val();

    var client = new Lancealot.Client({
      name: name,
      address: address,
      city: city,
      zipCode: zipCode,
      phone: phone
    });

    client.save(null, {
      success: function() {
        $('input').val('');
        Backbone.history.navigate('/clients', true);
      }
    });
  }

});
