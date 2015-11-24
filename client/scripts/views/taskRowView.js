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
    'click': function() {
      // this.model.navigateToView();
    },
    'click input:checkbox': 'toggleComplete'
  },

  template: Templates['taskRow'],

  initialize: function() {
    this.model.on('change', this.render, this);
  },

  render: function() {

    // grabbing our job model's attributes
    var modelData = this.model.toJSON();

    console.log(modelData);

    modelData.employees = modelData.employees || "No Current Employees";
    modelData.expenses = modelData.expenses || "No Current Expenses";

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
  }


});
