// APP

/*
For templates, look at client/views/backbone_templates.

This is the client-side homebase. It initializes the router,
adds click/submit listeners, and sets up actions for when
the user tries navigating to another page.

View this module in tandem with routers.js
*/

window.Lancealot = Backbone.View.extend({

  template: Templates['layout'],

  events: {
    'click li a.jobs':  'renderIndexView',
    'click li a.clients': 'renderClientsView',
    'click button#createNewJob': 'renderJobEntryView',
    'click button#createNewJob': 'renderClientEntryView',
    'submit #addJob': 'renderIndexView',
    'submit #addClient': 'renderJobEntryView'
  },

  initialize: function(){
    $("#container").append(this.render().el);
    this.router = new Lancealot.Router({ el: this.$el.find('#container') });
    Backbone.history.start({ pushState: true });
  },

  render: function(){
    this.$el.html( this.template() );
    return this;
  },

  renderIndexView: function(e) {
    e && e.preventDefault();
    this.router.navigate('/jobs', { trigger: true });
  },

  renderClientsView: function(e) {
    e && e.preventDefault();
    this.router.navigate('/clients', { trigger: true });
  },

  renderClientEntryView: function(e) {
    e && e.preventDefault();
    this.router.navigate('/addclient', { trigger: true });
  },

  renderJobEntryView: function(e) {
    e && e.preventDefault();
    this.router.navigate('/addjob', { trigger: true });
  }

});
