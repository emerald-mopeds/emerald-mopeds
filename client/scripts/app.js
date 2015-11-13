// App View
window.Lancealot = Backbone.View.extend({

  template: Templates['layout'],

  events: {
    // 'keyup #clientSearch': 'handleSearch',
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
