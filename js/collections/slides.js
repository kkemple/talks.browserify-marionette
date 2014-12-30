'use strict';

var Slide = require('../models/slide'),
    Backbone = require('../libs/backbone'),
    Slides;

/**
 * The collection that is home to all slides in the app, instantiated in `js/main.js`
 */
Slides = Backbone.Collection.extend({
    model: Slide,
    initialize: function(models) {
        // if we have any models set the first one to active (could be option)
        if (models && models.length) models[0].active = true;
        this.index = 0;
    },

    /**
     * Responsible for transitioning to the next step/slide
     * Checks the current slide (model) to see if it has steps and can step forward
     * if it can not, it checks the collection itself
     */
    stepForward: function() {
        var slide;

        slide = this.findWhere({ active: true });
        if (!slide) return;
        if (slide.canStepForward()) {
            slide.stepForward();
            return;
        }

        if (this.index === this.length - 1) return;
        slide.set('active', false);
        this.at(++this.index).set('active', true);
    },

    /**
     * Responsible for transitioning to the previous step/slide
     * Checks the current slide to see if it has steps and can step bacward
     * if it can not, it checks the collection itself
     */
    stepBackward: function() {
        var slide;

        slide = this.findWhere({ active: true });
        if (!slide) return;
        if (slide.canStepBackward()) {
            slide.stepBackward();
            return;
        }

        if (this.index === 0) return;
        slide.set('active', false);
        this.at(--this.index).set('active', true);
    },

    /**
     * Responsible for transitioning to the specified slide
     * Sets current slide to not active, then grabs slide at specified index and sets to active
     */
    stepTo: function(index) {
        var slide;

        if (index === this.index) return;
        slide = this.findWhere({ active: true });
        if (!slide) return;

        slide.set('active', false);
        this.at(index).set('active', true);
        this.index = index;
    }
});

module.exports = Slides;
