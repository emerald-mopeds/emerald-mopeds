// Job Entry View (form) --> connected to Jobs Collection

/*
For templates, look at client/views/backbone_templates.

Similar to clientEntryView, except the client option in this form
is a dropdown menu of existing clients.
*/

Lancealot.JobEntryView = Backbone.View.extend({

  template: Templates['addJob'],

  events: {
    'submit': 'handleSubmit'
  },

  initialize: function() {
    this.collection.on('sync', this.render, this);
    this.collection.fetch();
  },

  render: function(){

    // passing in our array of clients so we can render
    // them in our dropdown menu
    var clientData = {clients: this.collection.toJSON()};
    this.$el.html(this.template(clientData));
    
    return this;
  },

  handleSubmit: function(e) {
    e.preventDefault();

    var client = $("option:selected").text();
    var description = $('#description').val();
    var rate = $('#rate').val();
    var start = $('#start').val();
    var end = $('#end').val();

    var job = new Lancealot.Job({
      client: client,
      description: description,
      rate: rate,
      start: start,
      end: end,
      status: false
    });

    job.save(null, {
      // success: Lancealot.renderJobEntryView
    });

    $('input').val('');
  }

});
