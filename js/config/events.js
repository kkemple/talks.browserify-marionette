'use strict';

var Backbone = require('../libs/marionette'),
    eventBus;

eventBus = new Backbone.Wreqr.EventAggregator();

module.exports = eventBus;
