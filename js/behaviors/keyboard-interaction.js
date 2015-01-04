'use strict';

var Marionette = require('../libs/marionette'),
    SwipeEvent = require('../models/swipe-event'),
    $ = require('../libs/jquery'),
    KeyboardInteraction;

KeyboardInteraction = Marionette.Behavior.extend({

    // when we are getting added to the DOM, set up keyup event
    onRender: function() {
        $(document).on('keyup', this._onKeyboardEvent.bind(this));
    },

    // clean up after we are gone
    onBeforeDestroy: function() {
        $(document).off('keyup', this._onKeyboardEvent.bind(this));
    },

    /**
     * The handler for any keyup events,
     * we want to know if the user is trying to
     * navigate through the presentation
     */
    _onKeyboardEvent: function(e) {
        switch (e.which) {

            // For left and up, step backward
            case 37:
            case 38:
                this.view.collection.stepBackward();
                e.preventDefault();
                break;

            // For right and down, step forward
            case 39:
            case 40:
                this.view.collection.stepForward();
                e.preventDefault();
                break;
            default:
                break;
        }
    }
});

module.exports = KeyboardInteraction;
