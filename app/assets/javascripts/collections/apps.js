FakeApps.Collections.Apps = Backbone.Collection.extend({
  model: FakeApps.Models.App,
  url: '/all-apps'
});