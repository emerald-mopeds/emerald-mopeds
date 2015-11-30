// ClientRowView --> Connected to Client model

/*
For templates, look at client/views/backbone_templates.
*/

Lancealot.ClientRowView = Backbone.View.extend({

  tagName: 'tr',

  template: Templates['clientInfo'],

  initialize: function() {
    this.model.on('change', this.render, this);
  },

  events: {
    'click .deleteClient': 'deleteClient',
    'click .updateClient': 'updateClient'
  },

  render: function(){
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  deleteClient: function(e) {
    e && e.preventDefault();
    this.model.destroy();
  },

  updateClient: function(e) {
    e && e.preventDefault();
    var thisRow = this.$el[0];

    var name = $(thisRow).find('#clientName').text();
    var address = $(thisRow).find('#clientAddress').text();
    var city = $(thisRow).find('#clientCity').text();
    var zipCode = $(thisRow).find('#clientZipCode').text();
    var phone = $(thisRow).find('#clientPhone').text();

    this.model.set({
      name: name,
      address: address,
      city: city,
      zip_code: zipCode,
      phone: phone
    });
    this.model.save(null, {
      success: function() {
        $('<div>Changes changed successfully!</div>').insertBefore('table')
          .delay(1500)
          .fadeOut(function() {
            $(this).remove(); 
          });
      }
    });
  }

});
