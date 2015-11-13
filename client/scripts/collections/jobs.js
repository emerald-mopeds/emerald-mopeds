// Job Collection
Lancealot.Jobs = Backbone.Collection.extend({

  model: Lancealot.Job,
  url: '/jobs',

  search : function(attribute, value){

    if (value == "") return this;
 
    var pattern = new RegExp(value,"gi");

    var filtered = (this.filter(function (job) {
      return pattern.test(job.get(attribute));
    }));

    return new Jobs(filtered);

  }

});