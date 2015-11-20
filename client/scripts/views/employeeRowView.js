//Employee View --> Connected to Employee model

Lancealot.EmployeeRowView = Backbone.View.extend({

  tagName: 'tr',

  template: Templates['employeeInfo'],

  initialize: function() {
    this.model.on('change', this.render, this);
  },

  render: function(){
    this.$el.html(this.template(this.model.attributes));
    return this;
  }

});