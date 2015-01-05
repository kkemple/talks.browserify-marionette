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
    childViewContainer: '[data-view="child-container"]',
    behaviors: {
        KeyboardInteraction: {
            behaviorClass: KeyboardInteraction
        }
    },

    /**
     * listen for the `keyboard:back` method trigger
     * from our KeyboardInteraction behavior
     */
    onKeyboardBack: function() {
        this.collection.stepBackward();
    },

    /**
     * listen for the `keyboard:forward` method trigger
     * from our KeyboardInteraction behavior
     */
    onKeyboardForward: function() {
        this.collection.stepForward();
    }
});

module.exports = Presentation;
