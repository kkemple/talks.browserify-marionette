'use strict';

var Marionette = require('../shims/marionette'),
    Backbone = require('../shims/backbone'),
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
        this.view.triggerMethod('touchStart', e.originalEvent.changedTouches[0].screenX);
        this.options.model.set('startX', e.originalEvent.changedTouches[0].screenX);
    },

    /**
     * When we get a touchend event, set the ending X
     * coordinate so we can process the interaction and determine
     * if we care about the screen event, all logic for that
     * lives in the screen event model
     */
    _onTouchEnd: function(e) {
        this.view.triggerMethod('touchEnd', e.originalEvent.changedTouches[0].screenX);
        this.options.model.set('endX', e.originalEvent.changedTouches[0].screenX);
    }
});

module.exports = SwipeInteraction;
