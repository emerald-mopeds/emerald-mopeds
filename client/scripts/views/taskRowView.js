// JobRowView --> connected to Job Model

/*
For templates, look at client/views/backbone_templates.

Note: render and toggleComplete help deal with 
checking and unchecking checkboxes
*/

Lancealot.TaskRowView = Backbone.View.extend({

  tagName: 'tr',
  className: 'clickable-row',

  events: {
    // 'click': function() {
    //   // this.model.navigateToView();
    // },
    'click input:checkbox': 'toggleComplete',
    'click .addEmployeeToTask': 'addEmployeeToTask',
    'click .addExpenseToTask': 'addExpenseToTask'
  },

  template: Templates['taskRow'],

  initialize: function() {
    this.model.on('change', this.render, this);
  },

  render: function() {
    // grabbing our job model's attributes
    var modelData = this.model.toJSON();

    modelData.client = modelData.client || "No Client";
    modelData.employees = modelData.employees ? modelData.employees.map(function (employee) {
      return employee.first_name + ' ' + employee.last_name + ' ($' + employee.hourly_billing_fee + '/hr): ' + employee._pivot_time_spent + 'hrs, TOTAL: $' + employee.hourly_billing_fee * employee._pivot_time_spent;
    }).join(', ') : "No Current Employees";
    modelData.expenses = modelData.expenses.length ? modelData.expenses.map(function (expense) {
      return expense.expense_name + ' ($' + expense.unit_price + ')';
    }).join(', ') : "No Current Expenses";

    // // adding the "checked" property to our model
    // // will tell our input HTML tag whether to check off the box or not (true v. false)
    // modelData.checked = modelData.status ? 'checked' : '';

    // adding "formattedDate" properties will format the date to look nice(ish)
    var startDate = new Date(modelData.start);
    var endDate = new Date(modelData.end);

    modelData.formattedStart = startDate.toDateString();
    modelData.formattedEnd = endDate.toDateString();

    this.$el.html(this.template(modelData));

    return this;
  },

  // updates status of the job in DB (true v. false)
  toggleComplete: function(e) {
    var checked = e.target.checked;
    var client = this.model.attributes.client.name;
    this.model.save({status: checked});
  },

  addEmployeeToTask: function(e) {
    console.log(e);
  },

  addExpenseToTask: function(e) {
    var thisTaskView = this;
    $.ajax({
      url: '/api/expense/',
      method: 'POST',
      data: {
        job_task_id: this.model.get('id'),
        user_id: this.model.get('client').user_id
      },
      success: function () {
        thisTaskView.trigger('reinit');
      }
    });
  }
});