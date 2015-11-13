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
