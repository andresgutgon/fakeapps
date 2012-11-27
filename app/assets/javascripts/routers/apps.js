FakeApps.Routers.Apps = Backbone.Router.extend({
  routes: {
    "all-applications": "all",
    "your-applications/:slug": "installed",
  },

  all: function() {    
    var apps = new FakeApps.Collections.Apps();    
    var p = apps.fetch();
    p.done(function () {
      appsList = new FakeApps.Views.AppsList( { collection : apps , user_apps : false} );      
      appsList.render();
    });    
  },
  installed: function(slug) {
    var apps = new FakeApps.Collections.InstalledApps([], { slug: slug });
    var p = apps.fetch();
    p.done(function () {
      appsList = new FakeApps.Views.AppsList( { collection : apps, user_apps : true} );      
      appsList.render();
    });    
  }
});