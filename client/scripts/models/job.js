// Job Model
Lancealot.Job = Backbone.Model.extend({
  url: '/api/jobs',

  navigateToView: function() {
    Backbone.history.navigate('/job/' + this.get('_id'), true);
  }

});
