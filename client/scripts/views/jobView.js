Lancealot.JobView = Backbone.View.extend({

  template: Templates['subHeader'],

  events: {

  },

  initialize: function (options) {
    console.log('/api/job/' + options.id);
    $.get({url: '/api/job/' + options.id, 
      success: function (data) {
        console.log('hello');
      }, 
      error: function (error) {
        console.log(error);
      }
    });
  }
});