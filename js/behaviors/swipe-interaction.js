'use strict';

var Marionette = require('../libs/marionette'),
    Backbone = require('../libs/backbone'),
    SwipeEvent = require('../models/swipe-event'),
    SwipeInteraction;

SwipeInteraction = Marionette.Behavior.extend({
    defaults: {
        model: new Backbone.Model()
    },

    events: {
        'touchstart': '_onTouchStart',
        'touchend': '_onTouchEnd'
    },

    /**
     * When we get a touchstart event, set the starting X
     * coordinate so we can process the interaction once the end event is fired
     */
    _onTouchStart: function(e) {
        var screenX = (e.type === 'touchstart') ?
                e.originalEvent.changedTouches[0].screenX :
                e.screenX;
        this.options.model.set('startX', screenX);
    },

    /**
     * When we get a touchend event, set the ending X
     * coordinate so we can process the interaction and determine
     * if we care about the screen event, all logic for that
     * lives in the screen event model
     */
    _onTouchEnd: function(e) {
        var screenX = (e.type === 'touchend') ?
                e.originalEvent.changedTouches[0].screenX :
                e.screenX;
        this.options.model.set('endX', screenX);
    }
});

module.exports = SwipeInteraction;
