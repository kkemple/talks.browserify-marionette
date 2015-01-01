'use strict';

var Marionette = require('./libs/marionette'),
    Backbone = require('./libs/backbone'),
    vent = require('./config/events'),
    app;


// Create the application instance
app = new Marionette.Application({
    regions: {
        mainRegion: '#app'
    }
});

// Create the main router for the application
app.router = new Backbone.Router();

// add a listener for the `app:setTitle` event
vent.on('app:setTitle', function(title) {
    document.title = title;
});

// add a listener for the `app:navigate` event
vent.on('app:navigate', function(path, trigger) {
    app.router.navigate(path, { trigger: (trigger || false) });
});

// Once the app is started all routers must be instantiated, start Backbone.history
app.on('start', function() {
    Backbone.history.start({ root: '/dist/index.html' });

    if (Backbone.history.fragment === '') {
        app.router.navigate('slides/1');
    }
});

module.exports = app;
