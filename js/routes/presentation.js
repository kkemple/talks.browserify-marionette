'use strict';

var Marionette = require('../libs/marionette'),
    PresentationController = require('../controllers/presentation'),
    PresentationRouter;

PresentationRouter = Marionette.AppRouter.extend({
    controller: new PresentationController(),
    appRoutes: {
        'slides/:id': 'stepTo'
    }
});

module.exports = PresentationRouter;
