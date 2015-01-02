'use strict';

var app = require('./app'),
    Backbone = require('./libs/backbone'),
    vent = require('./config/events'),
    PresentationModule = require('./modules/presentation');

// add a listener for the `app:screen` event
vent.on('app:screen', function(view) {
    app.mainRegion.show(view);
});

// add a listener for the `app:setTitle` event
vent.on('app:setTitle', function(title) {
    document.title = title;
});

// add a listener for the `app:navigate` event
vent.on('app:navigate', function(path, trigger) {
    Backbone.history.navigate(path, { trigger: (trigger || false) });
});

// add all modules
app.module('presenation', PresentationModule);

// Finally, start the app
app.start();

// start the history
Backbone.history.start();
