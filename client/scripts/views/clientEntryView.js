// Client Entry View (form) --> connected to Clients Collection
Lancealot.ClientEntryView = Backbone.View.extend({

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
    var phone = $('#phone').val();

    var client = new Lancealot.Client({
      name: name,
      address: address,
      phone: phone,
    });

    client.save({});

    $('input').val('');
  }

});
