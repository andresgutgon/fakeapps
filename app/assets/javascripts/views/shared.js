FakeApps.Views.Menu = Backbone.View.extend({
    el : "nav",
    template : JST['shared/menu'],
    initialize:function (current_user, router) {
      this.router = router;
      this.current_user = current_user;
      this.render();
    },
    events: {
        "click #all-apps": "all_apps",
        "click #your-apps": "your_apps"
    },      
    render: function () {        
      $(this.el).html(this.template({current_user : this.current_user}));      
      return this;
    },
    all_apps : function(e) {
      e.preventDefault();
      this.router.navigate("all-applications", true);
    },
    your_apps : function(e) {
      e.preventDefault();
      this.router.navigate("your-applications/" + this.current_user.slug, true);
    }

});