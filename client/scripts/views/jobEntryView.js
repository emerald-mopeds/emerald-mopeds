// Job Entry View (form) --> connected to Jobs Collection
Lancealot.JobEntryView = Backbone.View.extend({

  template: Templates['add'],

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

    var client = $('#client').val();
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

    job.save({});

    $('input').val('');
  }

});