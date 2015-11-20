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

  render: function(){
    this.$el.html(this.template(this.model.attributes));
    return this;
  }

});
