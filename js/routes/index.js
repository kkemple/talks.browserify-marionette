var app = require('../app'),
    Backbone = require('../libs/backbone'),
    PresentationRouter = require('./presentation');

app.addInitializer(function() {
    new PresentationRouter();

    Backbone.history.start({ root: '/dist/index.html' });

    if (Backbone.history.fragment === '') {
        app.router.navigate('slides/1');
    }
});