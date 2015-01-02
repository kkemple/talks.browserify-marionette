'use strict';

var Backbone = require('../libs/backbone'),
    vent = require('../config/events'),
    ScreenEvent;

ScreenEvent = Backbone.Model.extend({
    defaults: {
        startX: 0,
        endX: 0,
        direction: ''
    },
    initialize: function() {
        this.listenTo(this, 'change:endX', this.processInteraction);
    },
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
        action = (startX > endX) ? 'stepBackward' : 'stepForward';
        vent.trigger('slides:step', action);
    }
});

module.exports = ScreenEvent;
