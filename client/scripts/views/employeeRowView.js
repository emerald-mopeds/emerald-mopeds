//Employee View --> Connected to Employee model

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
    e.preventDefault();
    var that = this;
    this.model.destroy();
  },

  updateEmployee: function() {
    console.log('Pretend an employee is being updated');
  }

});
