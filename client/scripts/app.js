
var app = new App();
var appView = new AppView({model: app});
$('#container').append(appView.render());
app.get('jobs').fetch();
