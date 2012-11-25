FakeApps.Routers.Apps = Backbone.Router.extend({
  routes: {
    "all-applications": "all",
    "apps-installed-by/:slug": "installed",
  },

  all: function() {    
    var apps = new FakeApps.Collections.Apps().fetch();    
    new FakeApps.Views.AppsList( { el : $(".content"), collection : apps } );
  },
  installed: function(slug) {
    alert("ka kita");
  }
});