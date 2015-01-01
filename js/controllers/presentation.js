'use strict';

var Marionette = require('../libs/marionette'),
    reqres = require('../config/reqres'),
    PresentationController;

/**
 * Simple controller for our presentation router
 */
PresentationController = Marionette.Object.extend({
    initialize: function() {
        this.slides = reqres.request('slides');
    },
    stepTo: function(id) {
        this.slides.stepTo(parseInt(id, 10));
    }
});

module.exports = PresentationController;
