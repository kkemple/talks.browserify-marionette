'use strict';

var Slide = require('../models/slide'),
    Backbone = require('../libs/backbone'),
    vent = require('../config/events'),
    commands = require('../config/commands'),
    Slides;

/**
 * The collection that is home to all slides in the app, instantiated in `js/main.js`
 */
Slides = Backbone.Collection.extend({
    model: Slide,
    initialize: function(models) {
        // if we have any models set the first one to active (could be option)
        if (models && models.length) {
            models[0].active = true;
        }
        this.index = 0;
    },

    /**
     * Responsible for transitioning to the next step/slide
     * Checks the current slide (model) to see if it has steps and can step forward
     * if it can not, it checks the collection itself
     */
    stepForward: function() {
        var slide;

        slide = this.current;
        if (slide && slide.canStepForward()) {
            slide.stepForward();
            return;
        }

        if (this.index === this.length - 1) return;
        this.setActiveSlide(++this.index);
    },

    /**
     * Responsible for transitioning to the previous step/slide
     * Checks the current slide to see if it has steps and can step bacward
     * if it can not, it checks the collection itself
     */
    stepBackward: function() {
        var slide;

        slide = this.current;
        if (slide && slide.canStepBackward()) {
            slide.stepBackward();
            return;
        }

        if (this.index === 0) return;
        this.setActiveSlide(--this.index);
    },

    /**
     * Responsible for transitioning to the specified slide
     */
    stepTo: function(index) {
        if (typeof index !== 'number' ||
                index > this.length ||
                index < 1) {

            commands.execute('app:navigate', 'slides/' + (this.index + 1));
            return;
        }
        --index;
        if (index === this.index) return;
        this.index = index;
        this.setActiveSlide(this.index);
    },

    /**
     * Responsible for setting the active slide and then
     * firing related app events
     */
    setActiveSlide: function(index) {
        this.map(function(m) { m.set('active', false); });
        this.current = this.at(index);
        this.current.set('active', true);
        commands.execute('app:navigate', 'slides/' + (this.index + 1));
        commands.execute('app:setTitle', this.current.get('title'));
    }
});

module.exports = Slides;
