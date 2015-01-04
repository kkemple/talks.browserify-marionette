'use strict';

var app = require('./app'),
    Backbone = require('./libs/backbone'),
    commands = require('./config/commands'),
    PresentationModule = require('./modules/presentation');

// add a listener for the `app:screen` event
commands.setHandler('app:screen:show', function(view) {
    app.mainRegion.show(view);
});

// add a listener for the `app:setTitle` event
commands.setHandler('app:setTitle', function(title) {
    document.title = title;
});

// add a listener for the `app:navigate` event
commands.setHandler('app:navigate', function(path, trigger) {
    Backbone.history.navigate(path, { trigger: (trigger || false) });
});

// add all modules
app.module('presenation', PresentationModule);

// start the app
app.start();

// start the history
Backbone.history.start();
