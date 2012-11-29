FakeApps.Views.Menu = Backbone.View.extend({
    el : "nav",
    template : JST['shared/menu'],
    initialize:function () {
      this.render();
    },
    events: {
        "click #all-apps": "all_apps",
        "click #your-apps": "your_apps"
    },      
    render: function () {          
      $(this.el).html( this.template( {current_user : FakeApps.current_user, active_tab : this.options.active_tab} ) );
      return this;
    },
    all_apps : function(e) {
      e.preventDefault();
      FakeApps.router.navigate("all-applications", true);      
    },
    your_apps : function(e) {
      e.preventDefault();
      FakeApps.router.navigate("your-applications/" + FakeApps.current_user.slug, true);
    }

});