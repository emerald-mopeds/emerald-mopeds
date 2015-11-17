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
    'click li a.index':  'renderIndexView',
    'click li a.logout': 'renderAddView',
    'click li a.clients': 'renderClientsView',
    'click li a.addClient': 'renderClientEntryView',
    'submit #addJob': 'renderIndexView',
    'submit #addClient': 'renderAddView'
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
    this.router.navigate('/', { trigger: true });
  },

  renderClientsView: function(e) {
    e && e.preventDefault();
    this.router.navigate('/clients', { trigger: true });
  },

  renderClientEntryView: function(e) {
    e && e.preventDefault();
    this.router.navigate('/addclient', { trigger: true });
  },

  renderAddView: function(e) {
    e && e.preventDefault();
    this.router.navigate('/add', { trigger: true });
  }

});
