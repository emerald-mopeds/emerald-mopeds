
/*
MODELS AND COLLECTIONS
*/


// Job Model
var Job = Backbone.Model.extend({
  url: '/jobs'
});


// Job Collection
var Jobs = Backbone.Collection.extend({

  model: Job,
  url: '/jobs'

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

  template: _.template('<label>Client:</label><input id="client" type="text"/><br/>'+
                      '<label>Description:</label><input id="description" type="text"/><br/>' +
                      '<label>Rate:</label><input id="rate" type="text"/><br/>' +
                      '<label>Start:</label><input id="start" type="date"/><br/>' +
                      '<label>End:</label><input id="end" type="date"/><br/>' +
                      '<button class="submit">Add Job</button>'),

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

    var client = $('#client').val();
    var description = $('#description').val();
    var rate = $('#rate').val();
    var start = $('#start').val();
    var end = $('#end').val();

    this.collection.create({
      client: client,
      description: description,
      rate: rate,
      start: start,
      end: end,
    });

    $('input').val('');
  }

});

// Job View --> connected to Job Model
var JobView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td><%= client %></td>' +
                     '<td><%= description %></td>' +
                     '<td>$<%= rate %></td>' +
                     '<td><%= start %></td>' + 
                     '<td><%= end %></td>' + 
                     '<td><%= status %></td>'
                      ),

  initialize: function() {
    this.model.on('change', this.render, this);
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});

// Jobs List View --> connected to Jobs Collection
var JobsListView = Backbone.View.extend({

  tagName: "table",

  template: _.template('<th>Client</th>' + '<th>Description</th>' + '<th>Rate</th>' + 
                      '<th>Start</th>' + '<th>End</th>' + '<th>Status</th>'),

  initialize: function(){
    this.collection.on('sync', this.render, this);
    this.render();
  },

  render: function(){
    this.$el.children().detach();

    this.$el.html(this.template).append(
      this.collection.map(function(job) {
        return new JobView({model: job}).render();
      })
    );
  }

});

// App View
var AppView = Backbone.View.extend({

  initialize: function(){
    this.JobsListView = new JobsListView({collection: this.model.get('jobs')});
    this.JobEntryView = new JobEntryView({collection: this.model.get('jobs')});

    // this.router = new Router({ el: this.$el.find('#container') });
    // Backbone.history.start({ pushState: true });
  },

  render: function(){
    return this.$el.html([
      this.JobEntryView.$el, this.JobsListView.$el
      ]);
  }

});

// Router
// var Router = Backbone.Router.extend({

//   initialize: function(options) {
//     this.$el = options.el;
//   },

//   routes: {
//     '/': 'index',
//     '/add': 'addJob'
//   },

//   swapView: function(){

//   },

//   index: function(){

//   },

//   addJob: function(){

//   }



// });
