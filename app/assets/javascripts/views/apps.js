FakeApps.Views.AppsList = Backbone.View.extend({
    el : ".content",    
    initialize:function () {
        this.render();
    },
    render: function () {
        $(this.el).empty();        
         _.each(this.collection.models, function (app) {
          $(this.el).append(new FakeApps.Views.AppItem({model:app, user_apps : this.options.user_apps}).render().el);
        }, this);
        console.log(this.collection.length);
        return this;
    }
});


FakeApps.Views.AppItem = Backbone.View.extend({
    template : JST['apps/item'],
    tagName:"article",
    base_image : "/assets/apps/",    
    initialize:function () {        
        this.model.bind("change", this.render, this);        
    },
    render:function () {      
        $(this.el).attr({"id" : this.model.id});
        $(this.el).html(this.template( { user_apps : this.options.user_apps, base_image: this.base_image, app : this.model.toJSON() } ));
        return this;
    },
    events: {
        "click .install": "install_uninstall",        
    },    
    install_uninstall : function(ev) {
        ev.preventDefault();
        var url = $(ev.target).data('url');
        var self = this;
        var app = this.model;

        app.set({
          "user_ids" :  [FakeApps.current_user.id]
        });

        var app_object = ({
          "app" :   _.clone(app.attributes)
        });

        $.ajax({
          type: 'UPDATE',
          url: url,
          data: app_object,
          dataType: "json",
          success: function(data) {
            self.$el.slideUp();
            self.$el.remove();             
            var counter = parseInt($('.your-apps-counter').html());
            if (data.install) {
                counter = counter + 1;    
            } else {
                counter = counter - 1;    
            }
            if (counter <= 0 ) {
                counter = 0;
            }
            $('.your-apps-counter').html( counter );
            FakeApps.current_user.apps_counter = counter;
          }
        });

    }   

});