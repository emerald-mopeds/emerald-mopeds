// Job Collection
Lancealot.Jobs = Backbone.Collection.extend({

  model: Lancealot.Job,
  url: '/jobs',

  /*
  this function is used to filter jobs
  by client. it looks through the Jobs collection
  and only returns those jobs whose client's name
  matches what the user is typing.
  */
   
  searchByClient: function(value){

    if (value == "") return this;
 
    var pattern = new RegExp(value,"gi");

    var filtered = (this.filter(function (job) {
      return pattern.test(job.get('client').name);
    }));

    return new Lancealot.Jobs(filtered);

  }

});