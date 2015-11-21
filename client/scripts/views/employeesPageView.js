Lancealot.EmployeesPageView = Backbone.View.extend({

  template: Templates['subHeader'],

  events: {
    'keyup input': 'handleSearch',
    'click button#createNewEmployee': 'renderEmployeeCreateView'
  },

  initialize: function(){
    this.EmployeesListView = new Lancealot.EmployeesListView({collection: this.collection});
    this.templateContent = {buttonId: 'createNewEmployee',
      buttonText: 'Create New Employee',
      inputDomID: 'employeeSearch',
      filterbyText: 'filter by employee...'};
  },

  render: function(){
    this.$el.html([this.template(this.templateContent), this.EmployeesListView.render().el]);
    return this;
  },

  handleSearch: function() {
    var employee = $('#' + this.templateContent.inputDomID).val();
    var filteredList = this.collection.searchByClient(employee);
    this.EmployeesListView.filteredRender(filteredList);
  },

  renderEmployeeCreateView: function(e) {
    e && e.preventDefault();
    Backbone.history.navigate('/addemployee', true);
  }

});
