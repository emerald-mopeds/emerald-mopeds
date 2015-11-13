// App View
window.Lancealot = Backbone.View.extend({

  template: Templates['layout'],

  events: {
    // 'keyup #clientSearch': 'handleSearch',
    'click li a.index':  'renderIndexView',
    'click li a.logout': 'renderAddView',
    'submit': 'renderIndexView'
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

  renderAddView: function(e) {
    e && e.preventDefault();
    this.router.navigate('/add', { trigger: true });
  }

});
