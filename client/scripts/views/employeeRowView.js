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
    Backbone.history.navigate('/editemployee', true);
  }

});
