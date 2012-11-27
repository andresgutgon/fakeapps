var JST = window.JST;

var FakeApps = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},    
  init: function(current_user) {
  	this.current_user = current_user;
    this.router = new FakeApps.Routers.Apps();

    new FakeApps.Views.Menu(current_user, this.router);

    Backbone.history.start({pushState: true});
  }
};