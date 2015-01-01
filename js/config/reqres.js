'use strict';

var Backbone = require('../libs/backbone'),
    reqres;
/**
 * Create the event bus the application will depend on
 *
 * We don't want to use the App.vent bus
 * because we don't want to pass the app around all willy nilly
 */
reqres = new Backbone.Wreqr.RequestResponse();

module.exports = reqres;
