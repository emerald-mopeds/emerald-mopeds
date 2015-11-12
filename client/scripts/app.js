
/*
MODELS AND COLLECTIONS
*/


// Job Model
var Job = Backbone.Model.extend({

});


// Job Collection
var Jobs = Backbone.Collection.extend({

  model: Job,

  loadMsgs: function() {
    this.fetch();
  },

  parse: function() {
    // depends on how Cheyenne sets up server response
  }

});

// App Model
var App = Backbone.Model.extend({

  initialize: function() {
    this.set('jobs', new Jobs());
  },



});


/*
VIEWS
*/

// Job Entry View (form) --> connected to Jobs Collection
var JobEntryView = Backbone.View.extend({

  tagName: 'form',

  template: _.template('<input type="text"/><input type="submit" value="Add Job"/>'),

  events: {
    'submit': 'handleSubmit' 
  },

  initialize: function() {
    this.render();
  },

  render: function(){
    return this.$el.html(this.template());
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var client = $('input').val();
    this.collection.add({client: client});
    console.log(this.collection);
    $('input').val('');
  }

});

// Job View --> connected to Job Model
var JobView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= client %>)</td><td><%= description %></td><td><%= status %></td>'),

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});

// Jobs List View --> connected to Jobs Collection
var JobsListView = Backbone.View.extend({

  tagName: "table",

  initialize: function(){
    this.render();
  },

  render: function(){
    this.$el.children().detach();

    this.$el.html('<th>Jobs</th>').append(
      this.collection.map(function(job) {
        return new JobEntryView({model: job}).render();
      })
    );
  }

});

// App View
var AppView = Backbone.View.extend({

  initialize: function(){
    this.JobsListView = new JobsListView({collection: this.model.get('jobs')});
    this.JobEntryView = new JobEntryView({collection: this.model.get('jobs')});
  },

  render: function(){
    return this.$el.html([
      this.JobEntryView.$el, this.JobsListView.$el
      ]);
  }

});