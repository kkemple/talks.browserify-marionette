var Marionette = require('../libs/marionette'),
    SwipeEvent = require('../models/swipe-event'),
    ScreenInteraction;

SwipeInteraction = Marionette.Behavior.extend({
    events: {
        'touchstart': '_onTouchStart',
        'touchend': '_onTouchEnd'
    },

    initialize: function() {
        this.swipeEvent = new SwipeEvent();
    },

    /**
     * When we get a mousedown/touchstart event, set the starting X
     * coordinate so we can process the interaction once the end event is fired
     */
    _onTouchStart: function(e) {
        var screenX = (e.type === 'touchstart') ?
                e.originalEvent.changedTouches[0].screenX :
                e.screenX;
        this.swipeEvent.set('startX', screenX);
    },

    /**
     * When we get a mouseup/touchend event, set the ending X
     * coordinate so we can process the interaction and determine
     * if we care about the screen event, all logic for that
     * lives in the screen event model
     */
    _onTouchEnd: function(e) {
        var screenX = (e.type === 'touchend') ?
                e.originalEvent.changedTouches[0].screenX :
                e.screenX;
        this.screenEvent.set('endX', screenX);
    }
});