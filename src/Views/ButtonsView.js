var ButtonView = require('./ButtonView') 
        
var ButtonsView = Backbone.View.extend({
            render: function(){
              this.collection.forEach(this.addItem, this)
              return this
            },
            addItem: function(modelItem){
                var buttonView = new ButtonView({model: modelItem});
                var button = buttonView.render().el
                this.$el.append(button)
            }
});

module.exports = ButtonsView;