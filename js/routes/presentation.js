'use strict';

var Marionette = require('../shims/marionette'),
    PresentationRouter;

/**
 * The router for our presentation module,
 * a good rule of thumb is to have one router per module
 */
PresentationRouter = Marionette.AppRouter.extend({
    appRoutes: {
        '': 'stepTo',
        'slides/:id': 'stepTo'
    }
});

module.exports = PresentationRouter;
