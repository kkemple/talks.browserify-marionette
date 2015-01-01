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

module.exports = app;
