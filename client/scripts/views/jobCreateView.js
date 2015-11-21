// Job Create View (form) --> connected to Jobs Collection

/*
For templates, look at client/views/backbone_templates.

Similar to clientEntryView, except the client option in this form
is a dropdown menu of existing clients.
*/

Lancealot.JobCreateView = Backbone.View.extend({

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

    var clientId = parseInt($("option:selected").val());
    var description = $('#description').val();
    var dueDate = $('#dueDate').val();

    var job = new Lancealot.Job({
      client_id: clientId,  //do something here
      job_name: description,
      job_status: "Not Started",
      due_date: dueDate      
    });

    job.save(null, {
      success: function() {
        $('input').val('');
        Backbone.history.navigate('/jobs', true);
      }
    });

    $('input').val('');
  }

});
