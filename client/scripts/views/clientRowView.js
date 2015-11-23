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
    'click .deleteClient': 'deleteClient'
  },

  render: function(){
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  deleteClient: function(e) {
    e && e.preventDefault();
    this.model.destroy();
  }

});
