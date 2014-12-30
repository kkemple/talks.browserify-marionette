'use strict';

var Marionette = require('../libs/marionette'),
    Slide = require('./slide'),
    Presentation;

/**
 * The view that holds all slide views, really just an organization wrapper
 */
Presentation = Marionette.CollectionView.extend({
    template: require('../../partials/presentation.hbs'),
    className: 'presentation',
    childView: Slide,
    childViewContainer: '.slides'
});

module.exports = Presentation;
