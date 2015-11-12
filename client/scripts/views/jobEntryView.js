// Job Entry View (form) --> connected to Jobs Collection
var JobEntryView = Backbone.View.extend({

  tagName: 'form',

  template: _.template('<label>Client:</label><input id="client" type="text"/><br/>'+
                      '<label>Description:</label><input id="description" type="text"/><br/>' +
                      '<label>Rate:</label><input id="rate" type="text"/><br/>' +
                      '<label>Start:</label><input id="start" type="date"/><br/>' +
                      '<label>End:</label><input id="end" type="date"/><br/>' +
                      '<button class="submit">Add Job</button>'),

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

    var client = $('#client').val();
    var description = $('#description').val();
    var rate = $('#rate').val();
    var start = $('#start').val();
    var end = $('#end').val();

    this.collection.create({
      client: client,
      description: description,
      rate: rate,
      start: start,
      end: end,
    });

    $('input').val('');
  }

});