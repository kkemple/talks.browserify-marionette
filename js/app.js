'use strict';

var Marionette = require('./libs/marionette'),
    app;

// Create the application instance
app = new Marionette.Application({
    regions: {
        mainRegion: '[data-app="presentation"]'
    }
});

module.exports = app;
