'use strict';

var Marionette = require('./libs/marionette'),
    Backbone = require('./libs/backbone'),
    app;


/**
 * Create the application instance
 * @type {Marionette}
 */
app = new Marionette.Application({
    regions: {
        mainRegion: '#app'
    }
});

/**
 * Here is where all app configuration should go
 * Like app level event channels or app handlers
 */
app.commands.setHandler('setTitle', function(title) {
    document.title = document.title + ' - ' + title;
});

// Once the app is started all routers must be instantiated, start Backbone.history
app.on('start', function() {
    if (Backbone.history) {
        Backbone.history.start();
    }
});

module.exports = app;
