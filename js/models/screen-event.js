'use strict';

var Backbone = require('../libs/backbone'),
    _ = require('../libs/underscore'),
    vent = require('../config/events'),
    ScreenEvent;

/**
 * Used to help manage touch/drag events
 */
ScreenEvent = Backbone.Model.extend({
    defaults: {
        startX: 0,
        endX: 0
    },

    /**
     * Listen to the endX prop for changes,
     * process the full interaction
     */
    initialize: function() {
        this.listenTo(this, 'change:endX', _.throttle(this.processInteraction, 300));
    },

    /**
     * Responsible for determining if the interaction was
     * significant enough to respond to, if so fire presentation
     * level step event
     */
    processInteraction: function() {
        var action, startX, endX;

        startX = this.get('startX');
        endX = this.get('endX');
        if (startX === endX) return;
        if (Math.abs(startX - endX) < 50) {
            this.set('startX', 0);
            this.set('endX', 0, { silent: true });
            return;
        }
        action = (startX < endX) ? 'stepBackward' : 'stepForward';
        vent.trigger('presentation:step', action);
    }
});

module.exports = ScreenEvent;
