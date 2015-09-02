var ButtonView = Backbone.View.extend({
    tagName:'button',
    initialize: function(){
       this.model.on('change', this.render, this);
    }, 
    events:{
      'click': function(e){
      	var value = this.model.get('number');
      	this.model.set({'number':value * 2});
      }
    },
    render: function(){
        this.$el.html(this.model.get('number'));
        return this
    }
});

module.exports = ButtonView;
