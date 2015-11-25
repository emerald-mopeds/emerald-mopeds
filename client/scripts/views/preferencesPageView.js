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
    var newPassword2 = $('#newPassword2').val();

    if (newPassword === newPassword2) {
      $.ajax('/api/preferences', {
        method: 'PUT',
        data: { password: password, newPassword: newPassword },
        statusCode: {
          422: function() {
            $('input').val('');
            $('<div>The password entered is incorrect!</div>').insertAfter('button')
              .delay(1500)
              .fadeOut(function() {
                $(this).remove(); 
              });
            }
        },
        success: function() {
          $('input').val('');
          $('<div>Password changed successfully!</div>').insertAfter('button')
            .delay(1500)
            .fadeOut(function() {
              $(this).remove(); 
            });
        },
        error: function (error) {
          console.log(error);
        }
      });
    } else { 
      $('input').val('');
      $('<div>New passwords don\'t match... Please re-submit</div>').insertAfter('button')
        .delay(1500)
        .fadeOut(function() {
          $(this).remove(); 
        });
    }
  }
});
