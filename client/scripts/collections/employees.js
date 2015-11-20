//Employee Collection

Lancealot.Employees = Backbone.Collection.extend({

  model: Lancealot.Employee,
  url: '/api/employees',

  searchByEmployee: function(value){

    if (value == "") return this;
 
    var pattern = new RegExp(value,"gi");

    var filtered = (this.filter(function (employee) {
      return pattern.test(employee.get('name'));
    }));

    return new Lancealot.Employees(filtered);

  }
});