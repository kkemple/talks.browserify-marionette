'use strict';

var Backbone = require('../shims/backbone'),
    _ = require('../shims/underscore'),
    commands = require('../config/commands'),
    SwipeEvent;

/**
 * Used to help manage touch/drag events
 */
SwipeEvent = Backbone.Model.extend({
    defaults: {
        startX: 0,
        endX: 0
    },

    /**
     * Listen to the endX prop for changes,
     * process the full interaction
     */
    initialize: function() {
        this.on('change:endX', _.throttle(this.processInteraction, 300));
    },

    /**
     * Responsible for determining if the interaction was
     * significant enough to respond to, if so fire presentation
     * level step command
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
        commands.execute('presentation:step', action);
    }
});

module.exports = SwipeEvent;
