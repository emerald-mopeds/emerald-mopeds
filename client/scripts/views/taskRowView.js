// JobRowView --> connected to Job Model

/*
For templates, look at client/views/backbone_templates.

Note: render and toggleComplete help deal with 
checking and unchecking checkboxes
*/

Lancealot.TaskRowView = Backbone.View.extend({

  tagName: 'tr',
  className: 'bordered-row',

  events: {
    // 'click': function() {
    //   // this.model.navigateToView();
    // },
    'click input:checkbox': 'toggleComplete',
    'click .addEmployeeToTask': 'addEmployeeToTask',
    'click .addExpenseToTask': 'addExpenseToTask',
    'keydown .taskNameEdit': 'editTaskName'
  },

  editTaskName: function (e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      var task_id = this.model.get('task_id');
      var task_name = this.$el.find('.taskNameEdit').text();
      this.$el.find('.taskNameEdit').blur();
      $.ajax({
        url: '/api/task/' + task_id,
        method: 'PUT',
        data: {
          task_name: task_name
        }
      });
    }
  },

  template: Templates['taskRow'],

  initialize: function() {
    this.model.on('change', this.render, this);
  },

  render: function() {
    // grabbing our job model's attributes
    var modelData = this.model.toJSON();

    modelData.client = modelData.client || "No Client";
    modelData.employees = modelData.employees.length ? modelData.employees.map(function (employee) {
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

    //this adds all employees to the dropdown list
    var employeeSelect = this.$el.find('.employeeSelect');
    modelData.potentialEmployees.forEach(function(item, index) {
        employeeSelect.append($("<option />").val(index).text(item.first_name + ' ' + item.last_name));
    });

    return this;
  },

  // updates status of the job in DB (true v. false)
  toggleComplete: function(e) {
    var checked = e.target.checked;
    var client = this.model.attributes.client.name;
    this.model.save({status: checked});
  },

  addEmployeeToTask: function(e) {
    var newEmployee = +this.$el.find('.employeeSelect').val() + 1;
    var thisTaskView = this;
    $.ajax({
      url: '/api/employee/' + this.model.get('task_id'),
      method: 'POST',
      data: {
        newEmployee: newEmployee
      },
      success: function () {
        thisTaskView.trigger('reinit');
      }
    });
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
