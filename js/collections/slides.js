'use strict';

var Slide = require('../models/slide'),
    Backbone = require('../libs/backbone'),
    vent = require('../config/events'),
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
        if (slide.canStepForward()) {
            slide.stepForward();
            return;
        }

        if (this.index === this.length - 1) return;
        slide.set('active', false);
        this.setActiveSlide(++this.index);
    },

    /**
     * Responsible for transitioning to the previous step/slide
     * Checks the current slide to see if it has steps and can step bacward
     * if it can not, it checks the collection itself
     */
    stepBackward: function() {
        var slide;

        slide = this.findWhere({ active: true });
        if (slide.canStepBackward()) {
            slide.stepBackward();
            return;
        }

        if (this.index === 0) return;
        slide.set('active', false);
        this.setActiveSlide(--this.index);
    },

    /**
     * Responsible for transitioning to the specified slide
     * Sets current slide to not active, then grabs slide at specified index and sets to active
     */
    stepTo: function(index) {
        var slide;


        if (typeof index !== 'number' ||
                index > this.length ||
                index < 1) {

            vent.trigger('app:navigate', 'slides/' + (this.index + 1));
            return;
        }
        --index;
        if (index === this.index) return;
        slide = this.findWhere({ active: true });
        this.index = index;
        slide.set('active', false);
        this.at(this.index).set('active', true);
    },

    /**
     * Responsible for setting the active slide and then
     * firing related app events
     */
    setActiveSlide: function(index) {
        var slide = this.at(index);

        slide.set('active', true);
        vent.trigger('app:navigate', 'slides/' + (this.index + 1));
        vent.trigger('app:setTitle', slide.get('title'));
    }
});

module.exports = Slides;
