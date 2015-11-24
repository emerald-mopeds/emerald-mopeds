Lancealot.PreferencesPageView = Backbone.View.extend({

  template: Templates['preferences'],

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

    var password = $('#oldPassword').val();
    var newPassword = $('#newPassword').val();
  
    $.ajax('/api/preferences', {
      method: 'PUT',
      data: { password: password, newPassword: newPassword },
      success: function() {
        console.log('hello');
        $('input').val('');
      },
      error: function (error) {
        console.log(error);
      }
    });
  }

});
