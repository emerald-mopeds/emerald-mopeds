Lancealot.TaskExpenseView = Backbone.View.extend({
  template: Templates['taskexpensetable'],

  initialize: function () {
    this.render();
  },

  render: function(){
    this.$el.empty();
    this.$el.html(this.template());
    var thisView = this.$el;
    this.collection.forEach(function (expense) {
      thisView.find('table').append('<tr>'
        + '<td>' + expense.get('expense_name') + '</td>'
        + '<td>' + expense.get('unit_price') + '</td>'
        + '</tr>');
    })
    return this;
  }
});
