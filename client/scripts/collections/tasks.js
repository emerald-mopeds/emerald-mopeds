// Client Collection

Lancealot.Task = Backbone.Model.extend();

Lancealot.Tasks = Backbone.Collection.extend({
  model: Lancealot.Task,

  searchByTask: function(value){

    if (value == "") return this;
 
    var pattern = new RegExp(value,"gi");

    var filtered = (this.filter(function (query) {
      return pattern.test(query.get('task').task_name);
    }));

    return new Lancealot.Tasks(filtered);

  }
});
