
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
  url: '/jobs',

  parse: function(response, options) {
    // depends on how Cheyenne sets up server response
    var results = [];

    for (var i = response.length-1; i >= 0; i--) {
      results.push(response.results[i]);
    }

    return results;
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
    this.collection.create({
      client: client
    });

    $('input').val('');
  }

});

// Job View --> connected to Job Model
var JobView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= client %>)</td>'),

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

  initialize: function(){
    this.collection.on('sync', this.render, this);
    this.render();
  },

  render: function(){
    this.$el.children().detach();

    this.$el.html('<th>Jobs</th>').append(
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
//     '': 'index',
//     'create': 'create'
//   },


// });

// initialize: function(options){
//     this.$el = options.el;
//   },

//   routes: {
//     '':       'index',
//     'create': 'create'
//   },

//   swapView: function(view){
//     this.$el.html(view.render().el);
//   },

//   index: function(){
//     var links = new Shortly.Links();
//     var linksView = new Shortly.LinksView({ collection: links });
//     this.swapView(linksView);
//   },

//   create: function(){
//     this.swapView(new Shortly.createLinkView());
//   }
