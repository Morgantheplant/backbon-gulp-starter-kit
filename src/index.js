$(function(){
        var data = require('../src/numberData');
        var ButtonCollection = require('../src/Collections/ButtonCollection');
        var ButtonsView = require('../src/Views/ButtonsView');

        var buttonCollection = new ButtonCollection().reset(data)
        var buttonsView = new ButtonsView({ collection: buttonCollection });
        // put the view onto the screen
        $('body').append(buttonsView.render().el);
});