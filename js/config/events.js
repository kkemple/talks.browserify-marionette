'use strict';

var Backbone = require('../shims/backbone'),
    eventBus;
/**
 * Create the event bus the application will depend on
 *
 * We don't want to use the App.vent bus
 * because we don't want to pass the app around all willy nilly
 */
eventBus = new Backbone.Wreqr.EventAggregator();

module.exports = eventBus;
