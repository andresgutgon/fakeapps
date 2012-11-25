FakeApps.Views.Menu = Backbone.View.extend({
    el : "nav",
    template : JST['shared/menu'],
    initialize:function (current_user) {
      this.current_user = current_user;
      this.render();
    },
    render: function () {        
      $(this.el).html(this.template({current_user : this.current_user}));      
      return this;
    }
});