// Job View --> connected to Job Model
Lancealot.JobView = Backbone.View.extend({

  tagName: 'tr',

  events: {
    'click input:checkbox': 'toggleComplete'
  },

  template: Templates['job'],

  initialize: function() {
    this.model.on('change', this.render, this);
  },

  render: function() {
    // we are injecting "checked" into our checkbox view
    // so that if a job's status is true, it will be checked,
    // otherwise it will be unchecked

    var modelData = this.model.toJSON();
    modelData.checked = modelData.status ? 'checked' : '';
    this.$el.html(this.template(modelData));

    return this;
  },

  // update database to set a job's status to TRUE or FALSE
  toggleComplete: function(e) {
    var checked = e.target.checked;
    console.log('did toggleComplete get called?')
    var client = this.model.attributes.client.name;
    console.log('toggle complete: ', this.model.attributes);
    this.model.save({status: checked});
    // this.model.save({status: checked}, {patch: true});
    console.log(checked);
  }


});