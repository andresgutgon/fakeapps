FakeApps.Views.AppsList = Backbone.View.extend({
    el : ".content",    
    initialize:function () {
      this.render();
    },
    render: function () {
        $(this.el).empty();        
         _.each(this.collection.models, function (app) {
          $(this.el).append(new FakeApps.Views.AppItem({model:app}).render().el);
        }, this);
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
        $(this.el).html(this.template( { base_image: this.base_image, app : this.model.toJSON() } ));
        return this;
    },
    events: {
        "click .install": "installApp"
    },    
    installApp: function( event ){
        // Button clicked, you can access the element that was clicked with event.currentTarget
        alert( "Installing..." );
    }    

});