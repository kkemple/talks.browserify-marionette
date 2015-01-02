'use strict';

var Marionette = require('../libs/marionette'),
    PresentationController;

/**
 * Simple controller for our presentation router
 */
PresentationController = Marionette.Controller.extend({
    initialize: function(options) {
        this.slides = options.slides;
    },
    stepTo: function(id) {
        this.slides.stepTo(parseInt(id, 10));
    }
});

module.exports = PresentationController;
