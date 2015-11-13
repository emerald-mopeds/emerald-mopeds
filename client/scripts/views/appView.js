// // App View
// window.Lancealot = Backbone.View.extend({

//   template: Templates['layout'],

//   events: {
//     // 'keyup #clientSearch': 'handleSearch',
//     'click li a.index':  'renderIndexView',
//     'click li a.logout': 'renderAddView'
//   },

//   initialize: function(){
//     // this.ClientSearchView = new ClientSearchView({collection: this.model.get('jobs')});
//     // this.JobsListView = new JobsListView({collection: this.model.get('jobs')});
//     // this.JobEntryView = new JobEntryView({collection: this.model.get('jobs')});

//     this.router = new Router({ el: this.$el.find('#container') });

//     Backbone.history.start({ pushState: true });
//   },

//   // render: function(){
//   //   return this.$el.html([
//   //     this.JobEntryView.$el, this.ClientSearchView.$el, this.JobsListView.$el
//   //     ]);
//   // },

//   // handleSearch: function(e) {
//   //   e.preventDefault();
//   //   var client = $('#clientSearch').val();
//   //   var filteredList = this.model.get('jobs').search('client', client);
//   //   this.JobsListView.filteredRender(filteredList);
//   // },

//   renderIndexView: function(e) {
//     e && e.preventDefault();
//     this.router.navigate('/', { trigger: true });
//   },

//   renderAddView: function(e) {
//     e && e.preventDefault();
//     this.router.navigate('/add', { trigger: true });
//   }

// });