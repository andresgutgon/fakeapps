FakeApps.Collections.Apps = Backbone.Collection.extend({
  model: FakeApps.Models.App,
  url: '/all-apps/'
});
FakeApps.Collections.InstalledApps = Backbone.Collection.extend({
  model: FakeApps.Models.App,
  initialize: function(models, options) {
    this.slug = options.slug;
  },
  url: function() {
    return '/apps-installed-by/' + this.slug;
  }
});