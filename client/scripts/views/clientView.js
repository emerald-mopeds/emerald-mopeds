// Client View --> Connected to Client model
Lancealot.ClientView = Backbone.View.extend({

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
