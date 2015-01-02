'use strict';

var Marionette = require('../libs/marionette'),
    PresentationRouter;

/**
 * The router for our presentation module,
 * a good rule of thumb is to have one router per module
 */
PresentationRouter = Marionette.AppRouter.extend({
    appRoutes: {
        'slides/:id': 'stepTo'
    },
    routes: {
        '': '_init'
    },
    _init: function() {
        this.navigate('slides/1');
    }
});

module.exports = PresentationRouter;
