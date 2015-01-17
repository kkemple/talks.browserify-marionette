'use strict';

var Backbone = require('../shims/backbone'),
    Slide;

/**
 * The model backing each slide
 */
Slide = Backbone.Model.extend({
    template: require('../../partials/slide.hbs'),
    defaults: {
        active: false,
        steps: 0,
        index: 0,
        titleSlide: false
    },

    /**
     * Checks the model to see if it can show a/another bullet point moving forward
     */
    canStepForward: function() {
        return this.get('steps') && this.get('index') < this.get('steps');
    },

    /**
     * Checks the model to see if it can show a/another bullet point moving backward
     */
    canStepBackward: function() {
        return this.get('steps') && this.get('index') > 0;
    },

    /**
     * Updates the model's `index` by incrementing
     */
    stepForward: function() {
        this.set('index', this.get('index') + 1);
    },

    /**
     * Updates the model's `index` by decrementing
     */
    stepBackward: function() {
        this.set('index', this.get('index') - 1);
    }
});

module.exports = Slide;
