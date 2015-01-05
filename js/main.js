'use strict';

var app = require('./app'),
    Backbone = require('./libs/backbone'),
    commands = require('./config/commands'),
    PresentationModule = require('./modules/presentation');

// add a handler for the `app:screen:show` event
commands.setHandler('app:screen:show', function(view) {
    app.mainRegion.show(view);
});

// add a handler for the `app:title` event
commands.setHandler('app:title', function(title) {
    document.title = title;
});

// add a handler for the `app:navigate` event
commands.setHandler('app:navigate', function(path, trigger) {
    Backbone.history.navigate(path, { trigger: (trigger || false) });
});

// add all modules
app.module('presenation', PresentationModule);

// start the app
app.start();

// start the history
Backbone.history.start();
