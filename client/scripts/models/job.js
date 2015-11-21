// Job Model
Lancealot.Job = Backbone.Model.extend({
  url: '/api/jobs',

  navigateToView: function() {
    Backbone.history.navigate('/clients', true);
  }

});
