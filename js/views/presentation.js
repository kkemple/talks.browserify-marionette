'use strict';

var Marionette = require('../libs/marionette'),
    Slide = require('./slide'),
    KeyboardInteraction = require('../behaviors/keyboard-interaction'),
    Presentation;

/**
 * The view that holds all slide views
 */
Presentation = Marionette.CompositeView.extend({
    template: require('../../partials/presentation.hbs'),
    className: 'presentation',
    childView: Slide,
    childViewContainer: '.slides',
    behaviors: {
        KeyboardInteraction: {
            behaviorClass: KeyboardInteraction
        }
    }
});

module.exports = Presentation;
