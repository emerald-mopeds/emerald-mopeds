//Employee Row View --> Connected to Employee model

Lancealot.EmployeeRowView = Backbone.View.extend({

  tagName: 'tr',

  template: Templates['employeeInfo'],

  initialize: function() {
    this.model.on('change', this.render, this);
  },

  events: {
    'click .deleteEmployee': 'deleteEmployee',
    'click .updateEmployee': 'updateEmployee'
  },

  render: function(){
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  deleteEmployee: function(e) {
    e && e.preventDefault();
    this.model.destroy();
  },

  updateEmployee: function(e) {
    e && e.preventDefault();

    var tableRow = this.$el[0];
    var firstName = $(tableRow).find('#employeeFirstName').text();
    var lastName = $(tableRow).find('#employeeLastName').text();
    var address = $(tableRow).find('#employeeAddress').text();
    var city = $(tableRow).find('#employeeCity').text();
    var zipCode = $(tableRow).find('#employeeZipCode').text();
    var phone = $(tableRow).find('#employeePhone').text();
    var hourlyBillingFee = $(tableRow).find('#employeeHourlyBillingFee').text();

    this.model.set({
      first_name: firstName,
      last_name: lastName,
      address: address,
      city: city,
      zip_code: zipCode,
      phone: phone,
      hourly_billing_fee: hourlyBillingFee
    });
    this.model.save();
  }

});
