Lancealot.EmployeeCreateView = Backbone.View.extend({

  template: Templates['addEmployee'],

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
    //kept fields from client - will need to update for info in employee table
    var name = $('#name').val();
    var address = $('#address').val();
    var phone = $('#phone').val();

    var employee = new Lancealot.Employee({
      name: name,
      address: address,
      phone: phone,
    });

    employee.save({});

    $('input').val('');
  }

});