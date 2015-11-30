Lancealot.TaskEmployeeView = Backbone.View.extend({
  template: Templates['taskemployeetable'],

  initialize: function () {
    this.render();
  },

  render: function(){
    this.$el.empty();
    this.$el.html(this.template());
    var thisView = this.$el;
    this.collection.forEach(function (employee) {
      thisView.find('table').append('<tr>'
        + '<td>' + employee.get('first_name') + '</td>'
        + '<td>' + employee.get('last_name') + '</td>'
        + '<td>' + employee.get('hourly_billing_fee') + '</td>'
        + '<td>' + employee.get('_pivot_time_spent') + '</td>'
        + '<td>' + employee.get('hourly_billing_fee') * employee.get('_pivot_time_spent') + '</td>'
        + '</tr>');
    })
    return this;
  }
});
