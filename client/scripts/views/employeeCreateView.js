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

    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var address = $('#address').val();
    var city = $('#city').val();
    var zipCode = $('#zipCode').val();
    var phone = $('#phone').val();
    var billingFee = $('#billingFee').val();

    var employee = new Lancealot.Employee({
      first_name: firstName,
      last_name: lastName,
      address: address,
      city: city,
      zip_code: zipCode,
      phone: phone,
      hourly_billing_fee: billingFee
    });

    employee.save({});

    $('input').val('');
  }

});
