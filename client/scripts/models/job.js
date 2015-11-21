// Job Model
Lancealot.Job = Backbone.Model.extend({
  url: '/api/jobs',

  navigateToView: function() {
    console.log('coucou');
    Backbone.history.navigate("/clients", true);
  }

});
